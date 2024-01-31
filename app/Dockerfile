FROM node:20.11.0 AS builder

WORKDIR /usr/src/app

RUN apt-get update

COPY . .

FROM alpine

WORKDIR /usr/src/app

COPY --from=builder /usr/src/app /usr/src/app

RUN apk update && apk upgrade && \
  apk add nodejs npm

RUN npm install

ENTRYPOINT [ "npm", "start" ]