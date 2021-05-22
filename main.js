const http = require('http');
const app = require('express')();

const hostname = '127.0.0.1';
const port = 80;

app.post('/getImages', (req, res) => {
  res.send({
    heresSome: "jsonForYa"
  });
});

http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write('Hello World!');
  res.end();
}).listen(port);

// app.listen(port, () => {
//   console.log(`Running express at ${hostname}:${port}`);
// })