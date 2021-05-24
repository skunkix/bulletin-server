import * as express from 'express';
import { getImages } from './network/api';
const cors = require("cors");

const app = express();

const hostname = '127.0.0.1';
const port = process.env.PORT || 3000;

var whitelist = ['http://localhost:8080'];
const corsOptions = {
  // origin: (origin, callback) => whitelist.indexOf(origin) !== -1 ? 
  //   callback(null, true) : 
  //   callback(null, false)
    origin: '*'
};

app.use(cors(corsOptions));

app.post('/getImages', getImages);

app.listen(port, () => {
  console.log(`Running express at ${hostname}:${port}`);
})