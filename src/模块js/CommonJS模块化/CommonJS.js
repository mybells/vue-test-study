// require是运行时加载
// import是编译时加载或者静态加载,效率比CommonJS模块的加载方式高,也导致了ES6模块本身无法被引用，因为它不是对象
const xx = require('../ES6的Module/moudle1')
console.log(xx)// Module {default: "a", __esModule: true, Symbol(Symbol.toStringTag): "Module"}

// 导出为一个对象
var obj = require('./m1.js')// CommonJS 模块输出的是值的拷贝，也就是说，一旦输出一个值，模块内部的变化就影响不到这个值。
console.log(obj)// {a: 12, foo: ƒ}会接收到最后一个module.exports
obj.a = 34// m1.js中a还是12，
obj.foo()// 34

// 导出是一个函数， 可以直接执行
var foo = require('./m3.js')
foo()// {{a: 12}}

// 导出为一个对象， 对象里面的属性为foo
var obj3 = require('./m2.js')
console.log(obj3)// {foo: ƒ, ds: ƒ, str: "a", obj: {…}}
var val = obj3.foo()
console.log(val)// {a: 12}