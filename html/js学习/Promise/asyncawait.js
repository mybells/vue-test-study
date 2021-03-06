/* async/await用法 */
function fn(n) {
  return new Promise((resolve,reject)=>{
    setTimeout(() => {
      resolve(n);
    }, 2000);
  })
}
// async function test() {
//   let a = await fn('a');
//   console.log(a);
//   let b = await fn('b');
//   console.log(b);
//   let c = await fn('c');
//   console.log(c);
//   return [a,b,c];
// }
// test().then(v=>{
//   console.log('success',v);
// },e=>{
//   console.log('trow',e);
// })

/* async/await是Generator生成器的语法糖 */
/* 将async/await写法改为Generator/Promise写法 */
function test() {
  let _test = asyncToGenerator(function* () {
    let a = yield fn('a');
    console.log(a);
    let b = yield fn('b');
    console.log(b);
    let c = yield fn('c');
    console.log(c);
    return [a,b,c];
  });
  return _test.apply(this,arguments);
}

function asyncToGenerator(fn) {
  return function() {
    let gen = fn.apply(this,arguments);//遍历器对象
    return new Promise((resolve,reject)=>{
      function step(key,args) {
        let res;
        try {
          res = gen[key](args);//next传入的参数是上一个yield的返回值。
        } catch (error) {
          reject(error);
        }
        let {done,value} = res;
        if (done) {
          resolve(value);
        } else {
          return Promise.resolve(value).then(v=>step('next',v),e=>step('throw',e));
        }
      }
      step('next');
    })
  }
}

test().then(v=>{
  console.log('success',v);
},e=>{
  console.log('trow',e);
})

// a
// b
// c
// success [ 'a', 'b', 'c' ]