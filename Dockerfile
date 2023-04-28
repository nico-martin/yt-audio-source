FROM node:18
RUN mkdir -p /usr/src/yt-source-nico-dev/node_modules && chown -R node:node /usr/src/yt-source-nico-dev
WORKDIR /usr/src/yt-source-nico-dev
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 8080
CMD [ "node", "npm run start" ]
