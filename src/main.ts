const http = require('http');
const app = require('express')();
const cors = require("cors");

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

app.post('/getImages', (req, res) => {
  res.send({
    heresSome: "jsonForYa"
  });
});

app.listen(port, () => {
  console.log(`Running express at ${hostname}:${port}`);
})