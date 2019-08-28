var xx = require("./moudle2");
console.log(xx);
//123
//Module{}
//两秒后settime


let v=import('./moudle2');
console.log(v);//先Promise {<pending>}再打印123再过两秒输出settime



console.log('moudlestart')
import('./moudle2').then(val=>{
  console.log(val);
  // 123
  // Module {
  //   c: "c",
  //   default: "b",
  //   Symbol(Symbol.toStringTag): "Module",
  //   __esModule: true
  // }
})
console.log('moudleend')
//先moudlestart
//moudleend
//123
//Module {default: "b", __esModule: true, Symbol(Symbol.toStringTag): "Module"}
//两秒后settime


//前面几个合在一起
// 123
// Module {default: "b", __esModule: true, Symbol(Symbol.toStringTag): "Module"}
// Promise {<pending>}
// moudlestart
// moudleend
// Module {default: "b", __esModule: true, Symbol(Symbol.toStringTag): "Module"}
// 两秒后settime