FROM node:20.11.0 AS builder

WORKDIR /usr/src/app

RUN apt-get update \
  && npm i express \
  && npm i mysql \
  && npm i --save-dev @faker-js/faker

RUN wget https://github.com/jwilder/dockerize/releases/download/v0.7.0/dockerize-linux-amd64-v0.7.0.tar.gz \
  && tar -xzvf dockerize-linux-amd64-v0.7.0.tar.gz \
  && rm -r dockerize-linux-amd64-v0.7.0.tar.gz

COPY . .

FROM alpine

WORKDIR /usr/src/app

COPY --from=builder /usr/src/app /usr/src/app

RUN apk update && apk upgrade && \
  apk add nodejs npm

RUN mv /usr/src/app/dockerize /usr/local/bin/dockerize