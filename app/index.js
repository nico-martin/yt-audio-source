const ytdl = require('ytdl-core');

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const request = require('request');

const PORT = process.env.PORT || 2005;

let app = express();
app.use(cors());
app.use(bodyParser.json());

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
      console.log(err);

      res.status(400).send({
        url: '',
        author: '',
        title: '',
      });
    });
});

app.get('/play/:url', (req, res) => {
  req.pipe(request.get(req.params.url)).pipe(res);
});

app.all('*', (req, res, next) => {
  res.status(400).send({
    url: '',
    author: '',
    title: '',
  });
});

app.listen(PORT, () => console.log(`APP listening to ${PORT}!`));
