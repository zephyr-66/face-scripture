const http = require("http");
const url = require("url");

// 创建一个server
const server = http.createServer(function (req, res) {
  if (req.url !== "/favicon.ico") {
    // 解析url
    // const myUrl = url.parse(req.url, true);
    // console.log(myUrl.query); // {username: 123}
    const myUrl = new URL(req.url, "http://localhost:3000");
    console.log(myUrl.searchParams.get("username")); // 123
  }
  res.writeHead(200, {
    contentType: "application/json",
  });
  res.write("<h1>hello nodejs</h1>");
  res.end();
});

server.listen(3000);
