const http = require("http");

/**
 * 通过 package.json 来引用文件
 * 1. 通过在 node_modules/zephyr 中 npm init --yes 来生成 package.json 文件
 * 2. package.json 文件中告诉了程序入口文件为 ："main": "tools.js",
 * 3. Node 通过 require 查找 node_modules/zephyr，发现它有个 package.json
 * 4. Node 执行 tools.js 文件
 */
const tools3 = require("zephyr");

http
  .createServer(function (req, res) {
    res.writeHead(200, {
      "Content-Type": "text/html;charset=UTF-8",
    });

    res.write('<h1 style="text-align:center">Hello NodeJS</h1>');

    console.log(tools3.add(4, 5, 6));

    res.end();
  })
  .listen(3000);
