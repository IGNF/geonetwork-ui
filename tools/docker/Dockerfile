# This dockerfile should work for all traditional apps,
# i.e. it only sets up a nginx server with the app dist folder

ARG registry=docker.io
FROM ${registry}/library/php:8.1-apache

# Configuration de apache
COPY tools/docker/apache/apache-vhost.conf /etc/apache2/sites-available/000-default.conf
COPY tools/docker/apache/apache-security.conf /etc/apache2/conf-enabled/security.conf
COPY tools/docker/apache/apache-ports.conf /etc/apache2/ports.conf
COPY tools/docker/docker-entrypoint-ign.sh /opt/docker-entrypoint-ign.sh

RUN a2enmod rewrite remoteip alias headers

ARG APP_NAME="search"
ENV APP_NAME=${APP_NAME}
ENV GN4_API_URL ""
ENV PROXY_PATH ""
ENV CONFIG_DIRECTORY_OVERRIDE ""
ENV ASSETS_DIRECTORY_OVERRIDE ""
ENV CUSTOM_SCRIPTS_DIRECTORY ""

COPY dist/apps/${APP_NAME} /opt/rechercher-une-donnee/
RUN mv /opt/rechercher-une-donnee/assets/configuration/default.toml /opt/
RUN chmod +x /opt/docker-entrypoint-ign.sh

VOLUME /opt/rechercher-une-donnee/assets/configuration

USER www-data

EXPOSE 8080

ENTRYPOINT ["sh", "/opt/docker-entrypoint-ign.sh"]