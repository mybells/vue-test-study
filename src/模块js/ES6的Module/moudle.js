import x from './moudle1'
import y from './moudle2'//等同与 import {default as y} from './moudle2'
// x=666//报错，x应该是静态分析的，不允许运行时改变

console.log(x,y)//a,b

import {d} from './moudle2'
console.log(d)//d

import {s2} from './moudle2'
console.log(s2)//e
// import {s2} from './moudle2'//报错，已导入的不能够再导入


import y1,{e,s1} from './moudle2'
console.log(y1,e,s1)//b,e,d

import {d as s3} from './moudle2'
import {s1 as s4} from './moudle2'
console.log(s3)//d
console.log(s4)//d

import * as allexport from './moudle2'
// allexport.c="dfasd"//Uncaught TypeError: Cannot set property c of #<Object> which has only a getter
console.log(allexport)
// Module {
//   c: "c",
//   d: "d",
//   default: "b",
//   e: "e",
//   f:  f(),
//   s1: "d",
//   s2: "e",
//   Symbol(Symbol.toStringTag): "Module",
//   __esModule: true
// }


// /* export与import的复合写法 */
// export {d,e} from './moudle2'
// //等同于
// import {d,e} from './moudle2'
// export {d,e}

// //具名接口改为默认接口
// // export {d as default} from './moudle2'
// //等同于
// import {d} from './moudle2'
// export default d;

//默认接口改为具名接口
export {default as d1} from './moudle2'

/* 动态加载 */
//类似require,只不过require同步加载,import()异步加载
//就是说require必须读取到代码才执行下一步操作。这个一般是读取代码的时间
//https://www.jb51.net/article/124442.htm
let v=import('./moudle2');
console.log(v);//Promise {<pending>}
console.log('moudlestart')
import('./moudle2').then(val=>{
  console.log(val);
  // Module {
  //   c: "c",
  //   d: "d",
  //   default: "b",
  //   e: "e",
  //   f:  f(),
  //   s1: "d",
  //   s2: "e",
  //   Symbol(Symbol.toStringTag): "Module",
  //   __esModule: true
  // }
})
console.log('moudleend')
Promise.all([import('./moudle2'),import('./moudle1')]).then(res=>{
  console.log(res)
  // (2) [Module, Module]
  // 0: Module {…}
  // 1: Module {default: "a", __esModule: true, Symbol(Symbol.toStringTag): "Module"}
  // length: 2
})

