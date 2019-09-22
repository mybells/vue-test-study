require(['./math'], function(math) {
  console.log(math.add(1, 1));// 2
})

require(['./math2'], function(math) {
  console.log(math.add(1, 2));// 3
})

define('MM', ['./math'], function(callback) {
  return callback
})
require(['MM'], function(math) {
  console.log(math.add(1, 3));// 4
})
// 依次输出2，4，3