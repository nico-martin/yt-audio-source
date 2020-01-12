FROM node:10
RUN mkdir -p /usr/src/ytaudio-nico-dev/node_modules && chown -R node:node /usr/src/ytaudio-nico-dev
WORKDIR /usr/src/ytaudio-nico-dev
COPY package*.json ./
RUN yarn install
COPY . .
EXPOSE 8080
CMD [ "node", "yarn start" ]