const http = require('http');
const app = require('express')();

const hostname = '127.0.0.1';
const port = 3000;

app.post('/getImages', (req, res) => {
  res.send({
    heresSome: "jsonForYa"
  });
});

app.listen(port, () => {
  console.log(`Running express at ${hostname}:${port}`);
})