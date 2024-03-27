const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("This is Our Home Page");
  }
  if (req.url === "/about") {
    res.end("This is Our Request Url");
  }
  res.end(`
            <h1>Oops!</h1>
            <p>Something went Wrong</p>
            <a href="/">Back Home</a>
    `);
});

server.listen(5000);
