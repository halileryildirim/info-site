const http = require("node:http");
const fs = require("node:fs");

http
  .createServer((req, res) => {
    let filePath = "./";
    switch (req.url) {
      case "/":
        filePath += "index.html";
        break;

      case "/about":
        filePath += "about.html";
        break;

      case "/contact-me":
        filePath += "contact-me.html";
        break;

      default:
        filePath += "404.html";
        break;
    }
    fs.readFile(filePath, (err, data) => {
      if (err) {
        res.writeHead(404, { "Content-Type": "text/html" });
        fs.readFile("404.html", (err, data) => {
          res.end(data, "utf-8");
        });
      } else {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data, "utf-8");
      }
    });
  })
  .listen(8080);
