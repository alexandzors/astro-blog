FROM mcr.microsoft.com/devcontainers/typescript-node:latest

USER root
RUN apt update && apt upgrade -y

RUN wget https://github.com/ltex-plus/ltex-ls-plus/releases/download/18.4.0/ltex-ls-plus-18.4.0-linux-x64.tar.gz && mkdir /ltex && tar -xf ltex-ls-plus-18.4.0-linux-x64.tar.gz -C /ltex && mv /ltex/ltex-ls-plus-18.4.0 /ltex/ltex-ls-plus && chown -R node:node /ltex && rm ltex-ls-plus-18.4.0-linux-x64.tar.gz

RUN wget https://download.oracle.com/java/21/latest/jdk-21_linux-x64_bin.deb && dpkg -i jdk-21_linux-x64_bin.deb && rm jdk-21_linux-x64_bin.deb

RUN wget https://github.com/alexandzors/caddy/releases/download/v2.9.1/caddy && chown root:root caddy && chmod +x caddy && mv caddy /usr/bin/

RUN mkdir -p /site && chown -R node:node /site

WORKDIR /site
USER node