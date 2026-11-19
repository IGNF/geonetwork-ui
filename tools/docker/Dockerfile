# This dockerfile should work for all traditional apps,
# i.e. it only sets up a nginx server with the app dist folder

ARG registry=docker.io
FROM ${registry}/nginx/nginx-unprivileged:alpine

USER root

COPY tools/docker/nginx.ign.conf /etc/nginx/conf.d/default.conf
COPY tools/docker/docker-entrypoint-ign.sh /opt/docker-entrypoint-ign.sh

ARG APP_NAME="search"
ENV APP_NAME=${APP_NAME}
ENV GN4_API_URL ""
ENV SSO_URL ""
ENV SSO_CLIENT_ID ""
ENV CLIENT_ID ""
ENV PROXY_PATH ""
ENV CONFIG_DIRECTORY_OVERRIDE ""
ENV ASSETS_DIRECTORY_OVERRIDE ""
ENV CUSTOM_SCRIPTS_DIRECTORY ""

COPY --chown=33:33 dist/apps/${APP_NAME} /opt/rechercher-une-donnee/
RUN mv /opt/rechercher-une-donnee/assets/configuration/default.toml /opt/
RUN chmod +x /opt/docker-entrypoint-ign.sh

VOLUME /opt/rechercher-une-donnee/assets/configuration

USER 33:33

EXPOSE 8080

ENTRYPOINT ["sh", "/opt/docker-entrypoint-ign.sh"]