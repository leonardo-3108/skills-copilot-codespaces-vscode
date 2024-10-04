// Create a web server that listens on port 3000. When you visit http://localhost:3000/ in your browser, the server should respond with a page that says "Hello, World!".
// You can use the http module to create the server, and the listen method to listen on port 3000.
// You can use the createServer method to create the server, and the writeHead and end methods to respond with a page that says "Hello, World!".
// You can use the listen method to listen on port 3000.

const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end('Hello, World!');
});

server.listen(3000, () => {
  console.log('Server is listening on port 3000');
});