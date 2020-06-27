const http = require("http");

http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "Text/html; charset=utf-8" });
    // res.write("<h1>Cześć</h1>");
    res.end(`
    <h1>Dzień dobry</h1>
    <script src="./code.js"></script>
    `);
  })
  .listen(3000, "127.0.0.1");
