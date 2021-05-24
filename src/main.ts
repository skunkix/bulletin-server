import * as express from 'express';
import { useMockResponses } from './config';
import { RequestFulfiller } from './fulfiller/Fulfiller';
import { MockRepository } from './mocks/MockRepository';
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

const repo = useMockResponses ? new MockRepository : new Repository();
const fulfiller = new RequestFulfiller(repo);

app.post('/getImages', fulfiller.getImages.bind(fulfiller));
app.post('/addImage', fulfiller.addImage.bind(fulfiller));

app.listen(port, () => {
  console.log(`Running express at ${hostname}:${port}`);
})