const http = require('http');
const app = require('express')();
const cors = require("cors");

const hostname = '127.0.0.1';
const port = process.env.PORT || 3000;

var whitelist = ['http://localhost:8080'];

const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
};

app.post('/getImages', cors(corsOptions), (req, res) => {
  res.send({
    heresSome: "jsonForYa"
  });
});

app.listen(port, () => {
  console.log(`Running express at ${hostname}:${port}`);
})