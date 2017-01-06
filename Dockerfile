FROM node:6.9-alpine

ENV NODE_ENV production

RUN mkdir -p /usr/src/brosa
WORKDIR /usr/src/brosa

COPY package.json /usr/src/brosa/
RUN npm install

COPY build /usr/src/brosa/build
COPY static /usr/src/brosa/static

EXPOSE 8080
CMD [ "npm", "start" ]
