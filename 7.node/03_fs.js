// fs有两种调用方式
// 1.回调，例如：const fs = require("fs");
// 2.承诺,可以用async/await或.then()，例如：const fs = require("fs/promises")

// mkdir(path[, options], callback) 创建文件夹
// opendir(path[, options]) 打开一个目录
// appendFile(path, data[, options], callback) 追加内容

const fs = require("fs");
const fsPromises = fs.promises;

/**
 * @description fs.mkdir(path[, options], callback)
 * @param {string} path 要创建的路径
 * @param {{recursive?:boolean,mode?:string|number}|null} options 可选配置
 *          recursive：表示是否创建父目录，只有值为false时才会产生错误，默认值false
 *          mode：表示权限和粘性位，不支持windows,默认0o777
 * @param {function|null} callback 可选回调函数
 */
function mkdir(path, options = null, callback = null) {
  const fn =
    callback ||
    function (err) {
      if (err) {
        console.log("err", err);
        return;
      }
      console.log("创建成功");
    };
  // TODO: 为了展示ts的重载
  options ? fs.mkdir(path, options, fn) : fs.mkdir(path, fn);
}

// mkdir("css"); // 创建成功
// mkdir("css/less"); // no such file or directory, mkdir
// mkdir("css/less", { recursive: true }); // 创建成功

/*
(async function () {
  fsPromises
    .mkdir("css")
    .then(() => {
      console.log("创建成功");
    })
    .catch((err) => console.log(err.message));
})();
*/
/*
(async function () {
  const dir = await fsPromises.opendir("node_modules");
  for await (const dirent of dir) {
    console.log(dirent.name); // zephyr
  }
})();
*/
(async function () {
  const err = await fsPromises.appendFile("03_fs.js", "苏州是脑残");
  if (err) {
    console.log("写入失败:" + err.message);
  }
})();
