FROM node:20.11.0-alpine

WORKDIR /usr/src/app

RUN apt-get update

COPY . .

RUN npm install

COPY . .

CMD [ "npm", "start" ]