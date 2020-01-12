import { getInfo, chooseFormat } from 'ytdl-core';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
const PORT = process.env.PORT || 2005;

let app = express();
app.use(cors());
app.use(bodyParser.json());

app.get('/:videoID/', (req, res) => {
  getInfo(req.params.videoID)
    .then(info => {
      res.send({
        url: chooseFormat(info.formats, { filter: 'audioonly' }).url,
        author: info.author.name,
        title: info.title,
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

app.all('*', (req, res, next) => {
  res.status(400).send({
    url: '',
    author: '',
    title: '',
  });
});

app.listen(PORT, () => console.log(`APP listening to ${PORT}!`));
