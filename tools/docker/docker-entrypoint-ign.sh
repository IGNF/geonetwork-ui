#!/bin/bash
set -e

CONFIG_DIRECTORY=/opt/
APP_FILES_PATH=/opt/catalogue/
CONFIG_FILE_PATH=assets/configuration/
CONFIG_FILE_NAME=default.toml

if [ ! -z "${GN4_API_URL}" ]
then
  echo "[INFO] Replacing GN4 url in conf with: ${GN4_API_URL}..."
  sed "s%geonetwork4_api_url = \".*\"%geonetwork4_api_url = \"${GN4_API_URL}\"%" ${CONFIG_DIRECTORY}${CONFIG_FILE_NAME} > ${APP_FILES_PATH}${CONFIG_FILE_PATH}${CONFIG_FILE_NAME}
fi

echo "[INFO] docker-entrypoint-ign.sh ended successfully."

# Start Apache in foreground
/usr/sbin/apachectl -D FOREGROUND
