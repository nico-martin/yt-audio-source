const ytdl = require('ytdl-core');

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const request = require('request');
const favicon = require('serve-favicon');
const path = require('path');

const Sentry = require('@sentry/node');
const Tracing = require('@sentry/tracing');

const PORT = process.env.PORT || 2005;

let app = express();

Sentry.init({
  dsn:
    'https://ed1a63b5aa00466f9b9123fbbcb9b4ac@o4504470995664896.ingest.sentry.io/4504471001890816',
  integrations: [
    new Sentry.Integrations.Http({ tracing: true }),
    new Tracing.Integrations.Express({ app }),
  ],
  tracesSampleRate: 1.0,
});

app.use(cors());
app.use(bodyParser.json());
app.use(Sentry.Handlers.requestHandler());
app.use(Sentry.Handlers.tracingHandler());
app.use(favicon(path.join(__dirname, 'assets', 'favicon.ico')));

app.get('/ping/', (req, res) => {
  res.send({ ping: 'pong' });
});

app.get('/:videoID/', (req, res) => {
  ytdl
    .getInfo(req.params.videoID)
    .then(info => {
      const formats = {};
      info.formats
        .filter(file => file.mimeType.startsWith('audio'))
        .map(file => {
          formats[file.mimeType.split(';')[0]] = file.url;
        });

      res.send({
        url: ytdl.chooseFormat(info.formats, { filter: 'audioonly' }).url,
        formats,
        author: info.videoDetails.author.name,
        title: info.videoDetails.title,
        description: info.videoDetails.description,
        images: info.player_response.videoDetails.thumbnail.thumbnails,
      });
    })
    .catch(err => {
      res.status(400).send({
        url: '',
        author: '',
        title: '',
      });

      throw err;
    });
});

app.get('/play/:url', (req, res) => {
  req.pipe(request.get(req.params.url)).pipe(res);
});

app.get('/favico.ico', (req, res) => res.sendFile('myfavico.ico'));

app.all('*', (req, res, next) => {
  res.status(400).send({
    url: '',
    author: '',
    title: '',
  });
});

app.use(Sentry.Handlers.errorHandler());

app.listen(PORT, () => console.log(`APP listening to ${PORT}!`));
