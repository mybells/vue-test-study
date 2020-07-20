class Promisex {
  constructor(fn) {
    this.state = 'pending';
    this.value = null;
    this.reason = null;

    this.FulfilledStack = [];
    this.RejectedStack = [];
    let resolve = (val)=>{
      setTimeout(() => {
        if (this.state == "pending") {
          this.value = val;
          this.state = 'fulfilled';
          let queue;
          while (queue = this.FulfilledStack.shift()) {
            queue(val)
          }
        }
      });
    }

    let reject = (val)=>{
      setTimeout(() => {
        if (this.state == "pending") {
          this.state = "rejected"
          this.reason = val;
          let queue;
          while (queue = this.RejectedStack.shift()) {
            queue(val)
          }
        }
      });
    }
    try {
      fn(resolve,reject);
    } catch (error) {
      reject(error)
    }
  }

  then(fulfilled,rejected) {
    if (typeof fulfilled == 'function') {
      this.FulfilledStack.push(fulfilled)
    }
    if (typeof rejected == 'function') {
      this.RejectedStack.push(rejected);
    }
    return this;
  }
   
  static all(list) {
    return new Promisex((resolve,reject)=>{
      let ans = [];
      let count = 0;
      for (let i = 0;i < list.length;i++) {
        this.resolve(list[i]).then(res=>{
          ans[i] = res;
          count++;
          if (count === list.length) {
            resolve(ans);
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
        this.resolve(list[i]).then(res=>{
          resolve(res);
        },e=>{
          reject(e);
        })
      }
    })
  }

  static resolve(v) {
    if (v instanceof Promisex) {
      return v;
    } else {
      return new Promisex(resolve=>{
        resolve(v)
      })
    }
  }
}

new Promisex(function(resolve,reject) {
  setTimeout(() => {
    resolve(2);
  }, 2000);
}).then(res=>{
  console.log(res);
  return res;
}).then(res=>{
  console.log(3,res);
})


let a = new Promisex(function(resolve,reject) {
  setTimeout(() => {
    resolve(1);
  }, 2000);
})

let b = new Promisex(function(resolve,reject) {
  setTimeout(() => {
    resolve(2);
  }, 3000);
})

let c = new Promisex(function(resolve,reject) {
  setTimeout(() => {
    resolve(3);
  }, 1000);
})

Promisex.all([a,b,c]).then(res=>{
  console.log(res);
})
Promisex.race([a,b,c]).then(res=>{
  console.log(res);
})