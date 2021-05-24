import * as express from 'express';
import { RequestFulfiller } from './fulfiller/Fulfiller';
import { Repository } from './repository/Repository';
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

const repo = new Repository();
const fulfiller = new RequestFulfiller(repo);

app.post('/getImages', fulfiller.getImages);
app.post('/addImage', fulfiller.addImage);

app.listen(port, () => {
  console.log(`Running express at ${hostname}:${port}`);
})