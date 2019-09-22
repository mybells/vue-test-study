define(function(require, exports, module) {
  console.log(123)
  var a = require('../AMD模块化/math')
  console.log(a)// {add: ƒ}
  var b = require('../AMD模块化/math2')
  console.log(b)// {add: ƒ}
  // return a
  // exports.obj=a;
  module.exports = a;// 上面三种都行
})
// CMD推崇就近依赖，把模块变为字符串解析一遍, 找到依赖了哪些模块, 在加载模块完成后, 不立刻执行, 而是等到require后再执行;