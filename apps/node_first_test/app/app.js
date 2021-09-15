// require http
const http = require('http');
const port = 80;
const hostname = '0.0.0.0';
const fs = require('fs')

// define server
const server = http.createServer(function(req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'})
  fs.readFile('index.html',function(error,data) 
  {
    if (error)
    {
      res.writeHead(404)
      res.write('error: file not found')
    }
    else
    {
      res.write(data)
    }
    res.end();
  })
});


// start listeing
server.listen(port, hostname, function(error) {
    if (error)
    {
        console.log('something went wrong',error)
    }
    else
    {
      console.log(`Server running at http://${hostname}:${port}/`);
    }
});

