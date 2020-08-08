const { Step } = require("element-ui");

/* Promise */
let fn = (n)=>{
  setTimeout(()=>{
    return n;
  },2000)
}

class Promisex {
  constructor(fn) {
    this.state = "pending";
    this.value = null;
    this.reason = null;
    
    this.fulfilledStack = [];
    this.rejectedStack = [];
    
    let resolve = (val)=>{
      setTimeout(() => {
        if (this.state == "pending") {
          this.state = "fulfilled";
          this.value = val;
          let cb;
          while (cb = this.fulfilledStack.shift()) {
            cb(val);
          }
        }
      });
    }
    
    let reject = (val)=>{
      setTimeout(() => {
        if (this.state == "pending") {
          this.state = "rejected";
          this.reason = val;
          let cb;
          while (cb = this.rejectedStack.shift()) {
            cb(val);
          }
        }
      });
    }
    
    try {
      fn(resolve,reject);
    } catch (error) {
      reject(e)
    }
  }
  
  then(onFulfilled,onRejected) {
    if (this.state == "pending") {
      typeof onFulfilled == "function" && this.fulfilledStack.push(onFulfilled);
      typeof onRejected == 'function' && this.rejectedStack.push(onRejected);
    }
    if (this.state == "rejected") {
      onRejected(this.reason);
    }
    if (this.state == "fulfilled") {
      onFulfilled(this.value);
    }
    return this;
  }
  
  static resolve(val) {
    if (val instanceof Promisex) {
      return val;
    }
    return new Promisex((resolve,undefined)=>{resolve(val)});
  }
  
  static reject(val) {
    return new Promisex((undefined,reject)=>{reject(val)})
  }
  
  static all(list) {
    return new Promisex((resolve,reject)=>{
      let count = 0;
      let res = [];
      for (let i = 0;i < list.length;i++) {
        this.resolve(list[i]).then(val=>{
          res[i] = val;
          count++;
          if (count === list.length) {
            resolve(res);
          }
        },e=>{
          reject(e);
        })
      }
    })
  }
  
  static race(list) {
    return new Promisex((resolve,reject)=>{
      for (let i = 0;i < list.length;i++) {
        this.resolve(list[i]).then(val=>{
          resolve(val);
        },e=>{
          reject(e);
        })
      }
    })
  }
  
  catch(cb) {
    return this.then(undefined,cb);
  }
  
  finally(cb) {
    return this.then(
      res=>Promisex.resolve(cb()).then(()=>res),
      e=>Promisex.resolve(cb()).then(()=>{e})
    )
  }
}
Promisex.resolve(4).then(res=>{console.log(res)});
new Promisex((resolve,reject)=>{
  setTimeout(()=>{
    reject(2)
  },2000)
}).then(res=>{
  console.log(res,1)
  return res;
}).then(res=>{
  console.log(res,2)
}).catch(()=>{
  console.log(3);
}).finally(()=>{
  console.log(4);
})
/* call */
Function.prototype.call = function(context,...args) {
  context = context ? context : window;
  args = args ? args : [];
  let key = Symbol();
  context[key] = this;
  let res = context[key](...args)
  delete context[key];
  return res;
}


/* apply */
Function.prototype.apply = function(context,args) {
  context = context ? context : window;
  args = args ? args : [];
  let key = Symbol();
  context[key] = this;
  let res = context[key](...args);
  delete context[key];
  return res;
}

/* bind */
Function.prototype.bind = function(context,...args) {
  if (typeof this !== 'function') {
    throw TypeError('must be function');
  }
  let _this = this;
  return function F(...newArgs) {
    if (this instanceof F) {
      return new F(...args,...newArgs);
    }
    return _this.apply(context,[...args,...newArgs]);
  }
}

/* new */
function create(fn,...args) {
  let obj = Object.create(fn.prototype);
  let res = fn.apply(obj,args);
  return res instanceof Object ? res : obj;
}

/* instanceof */
function instanceofx(target,root) {
  let prototype = root.prototype;
  let left = target.__proto__;
  while (left) {
    if (prototype == left) {
      return false;
    }
    left = left.__proto__;
  }
  return false;
}


/* 节流防抖 */
let throttle = (fn,delay)=>{
  let flag = true;
  return (...args)=>{
    if (!flag) return;
    flag = false;
    setTimeout(() => {
      fn(...args);
      flag = true;
    }, delay);
  }
}
let debounce = (fn,delay)=>{
  let timer;
  return (...args)=>{
    if (timer)clearTimeout(timer);
    timer = setTimeout(()=>{
      fn(...args);
    },delay)
  }
}
/* 深拷贝 */
function clone(val) {
  if (Array.isArray(val)) {
    return val.map(clone);
  } else if (val && typeof val === "object") {
    let obj = {};
    for (let i in val) {
      obj[i] = clone(val[i]);
    }
    return obj;
  } else {
    return val;
  }
}
/* async/await */
function f(n) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(n);
    }, 2000);
  })
}
async function test() {
  let a = await f('a');
  console.log(a);
  let b = await f('b');
  console.log([a, b])
}

function asynctoGenerator(fn) {
  return new Promise((resolve,reject)=>{
    let gen = fn();
    function step(next,arg) {
      let res;
      try {
        res = gen[next](arg);
      } catch (e) {
        reject(e);
      }
      let {done,value} = res;
      if (done) {
        resolve(value);
      } else {
        return Promise.resolve(value).then(v=>step('next',v),e=>step('throw',e))
      }
    }
    step('next')
  })
}
asynctoGenerator(function* test() {
  let a = yield f('a');
  console.log(a);
  let b = yield f('b');
  console.log([a,b]);
})

/* 冒泡排序 */
function bubbleSort(arr) {
  for (let i = 1;i < arr.length;i++) {
    for (let j = 0;j < arr.length - i;j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j],arr[j + 1]] = [arr[j + 1],arr[j]];
      }
    }
  }
  return arr;
}
function selectSort(arr) {
  for (let i = 0;i < arr.length;i++) {
    let minIndex = i;
    for (let j = i + 1;j < arr.length;j++) {
      if (arr[j] > arr[minIndex]) {
        minIndex = j;
      }
    }
    [arr[i],arr[minIndex]] = [arr[minIndex],arr[i]];
  }
  return arr;
}
function insertSort(arr) {
  for (let i = 1;i < arr.length;i++) {
    let index = i;
    while (index > 0 && arr[index - 1] > arr[index]) {
      [arr[index - 1],arr[index]] = [arr[index],arr[index - 1]];
      index--;
    }
  }
  return arr;
}
function mergeSort(arr) {
  function part(arr) {
    if (arr.length < 2) {
      return arr;
    }
    let mid = Math.floor(arr.length / 2);
    let left = part(arr.slice(0,mid));
    let right = part(arr.slice(mid,arr.length));
    return merge(left,right);
  }
  function merge(left,right) {
    let res = [];
    let i = 0,j = 0;
    while (i < left.length && j < right.length) {
      if (left[i] <= right[j]) {
        res.push(left[i])
        i++;
      } else {
        res.push(right[j])
        j++;
      }
    }
    return i == left.length ? res.concat(right.slice(j)) : res.concat(left.slice(i));
  }
  return part(arr);
}

function quickSort(arr) {
  if (arr.length < 2) {
    return arr;
  }
  let base = arr[0];
  let left = [];
  let right = [];
  for (let i = 1;i < arr.length;i++) {
    if (arr[i] > base) {
      right.push(arr[i])
    }
    if (arr[i] <= base) {
      left.push(arr[i])
    }
  }
  return quickSort(left).concat(base).concat(right);
}

var arr = [8,4,5,7,1,4,6,2];
function quickSortx(arr) {
  let stack = [0,arr.length - 1];
  let i,j;
  while (stack.length) {
    j = right = stack.pop();
    i = left = stack.pop();
    let mid = Math.floor((left + right) / 2);
    while (i <= j) {
      while (arr[i] < arr[mid]) {
        i++;
      }
      while (arr[j] > arr[mid]) {
        j--;
      }
      if (i <= j) {
        [arr[i],arr[j]] = [arr[j],arr[i]];
        i++;
        j--;
      }
    }
    if (left < i - 1) {
      stack.push(left,i - 1);
    }
    if (right > i) {
      stack.push(i,right)
    }
  }
  return arr;
}
console.log(quickSortx(arr));