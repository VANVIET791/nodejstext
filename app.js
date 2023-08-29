const http = require('http');

const fs = require('fs');


const rs = fs.createReadStream('./index.html');

const fileName = 'mynewfile1.txt';
const content = 'Hello content!\n';


// lưu file
// fs.appendFile(fileName, content, function (err) {
//   if (err) throw err;
//   console.log('Saved!');
// });


fs.unlink(fileName, function (err) {
  if (err) throw err;
  console.log('File deleted!');
});



const hostname = '127.0.0.1';
const port = 3000;



const server = http.createServer((req, res) => {

  res.statusCode = 200;

  res.setHeader('Content-Type', 'text/html');
  // res.writeHead(200, { 'Content-Type': 'text/html' });


  fs.readFile('./index.html', 'utf-8', (error, data) => {
    if (error) {
      console.error("error", error);
      return;
    }
    res.end(data);
  });
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
