// require http
const http = require('http');
const port = 80;
const hostname = '0.0.0.0';

// define server
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

// start listeing
// server.listen(port, hostname, function(error)) => {
server.listen(port, hostname, (error) => {
    if (error)
    {
        console.log('something went wrong',error)
    }
    else
    {
      console.log(`Server running at http://${hostname}:${port}/`);
    }
});

