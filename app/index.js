import { getInfo, chooseFormat } from 'ytdl-core';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import request from 'request';

const PORT = process.env.PORT || 2005;

let app = express();
app.use(cors());
app.use(bodyParser.json());

app.get('/:videoID/', (req, res) => {
  if (req.params.videoID === '') {
    res.send({
      url: '',
      author: '',
      title: '',
    });
  }
  getInfo(req.params.videoID)
    .then(info => {
      const formats = {};
      info.formats
        .filter(file => file.mimeType.startsWith('audio'))
        .map(file => {
          formats[file.mimeType.split(';')[0]] = file.url;
        });

      res.send({
        url: chooseFormat(info.formats, { filter: 'audioonly' }).url,
        formats,
        author: info.author.name,
        title: info.title,
        description: info.description,
        images: info.player_response.videoDetails.thumbnail.thumbnails,
      });
    })
    .catch(err => {
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
