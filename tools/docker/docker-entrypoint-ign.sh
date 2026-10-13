#!/bin/bash
set -e

CONFIG_DIRECTORY=/opt/
APP_FILES_PATH=/opt/rechercher-une-donnee/
CONFIG_FILE_PATH=assets/configuration/
CONFIG_FILE_NAME=default.toml

cp "${CONFIG_DIRECTORY}${CONFIG_FILE_NAME}" "${APP_FILES_PATH}${CONFIG_FILE_PATH}${CONFIG_FILE_NAME}"

if [ ! -z "${GN4_API_URL}" ]
then
  echo "[INFO] Replacing GN4 url in conf with: ${GN4_API_URL}..."
  sed -i "s%geonetwork4_api_url = \".*\"%geonetwork4_api_url = \"${GN4_API_URL}\"%" "${APP_FILES_PATH}${CONFIG_FILE_PATH}${CONFIG_FILE_NAME}"
fi

for config_key in sso_url client_id
do
  case "${config_key}" in
    sso_url) config_value=${SSO_URL} ;;
    client_id) config_value=${SSO_CLIENT_ID} ;;
  esac
  if [ -n "${config_value}" ]; then
    escaped_value=$(printf '%s' "${config_value}" | sed 's/[\\"&%]/\\&/g')
    if grep -q "^${config_key} = " "${APP_FILES_PATH}${CONFIG_FILE_PATH}${CONFIG_FILE_NAME}"; then
      sed -i "s%^${config_key} = .*%${config_key} = \"${escaped_value}\"%" "${APP_FILES_PATH}${CONFIG_FILE_PATH}${CONFIG_FILE_NAME}"
    else
      sed -i "/^\[global\]/a ${config_key} = \"${escaped_value}\"" "${APP_FILES_PATH}${CONFIG_FILE_PATH}${CONFIG_FILE_NAME}"
    fi
  fi
done

echo "[INFO] docker-entrypoint-ign.sh ended successfully."

# Start Apache in foreground
/usr/sbin/apachectl -D FOREGROUND
