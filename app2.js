const http = require('http');


const { hello, hi } = require('../func-1');



const hostname = '127.0.0.1';
const port = 3000;


hello();
hi();



const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  const html = "<h1>Hello wolrd\n</h1>"
  res.end(html);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
