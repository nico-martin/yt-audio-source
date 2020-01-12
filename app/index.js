import { getInfo, chooseFormat } from 'ytdl-core';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
const PORT = process.env.PORT || 2005;

let app = express();
app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
  getInfo(req.query.v, (err, info) => {
    res.send({
      url: chooseFormat(info.formats, { filter: 'audioonly' }).url,
    });
  });
});

app.listen(PORT, () => console.log(`APP listening to ${PORT}!`));
