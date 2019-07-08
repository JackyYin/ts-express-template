FROM node:alpine
EXPOSE 3000

WORKDIR /usr/app/src

COPY package.json ./

RUN yarn install \
    && yarn cache clean

COPY . .
