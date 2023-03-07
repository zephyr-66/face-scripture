const http = require("http");

const server = http.createServer(function (request, response) {
  let data = null;
  const myUrl = new URL(request.url, " http://127.0.0.1:8080/");
  if (myUrl.pathname === "/jsonp") {
    data = JSON.stringify([{ name: "张三", age: 19 }]);
    const fcn = myUrl.searchParams.get("fcn");
    data = `${fcn}(${data})`;
  }
  // 将HTTP响应200写入response, 同时设置Content-Type: text/html:
  response.writeHead(200, { "Content-Type": "application/json" });
  // 将HTTP响应的HTML内容写入response:
  response.end(data);
});

// 让服务器监听8080端口:
server.listen(8080);

console.log("Server is running at http://127.0.0.1:8080/");
