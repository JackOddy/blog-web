FROM node:6-alpine

WORKDIR /var/app

COPY package.json ./
RUN npm install --production --silent

COPY server.js ./
COPY build/ ./build/

EXPOSE 9090

CMD node server.js
