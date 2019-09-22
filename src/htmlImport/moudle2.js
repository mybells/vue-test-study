console.log(123)
const b = "b";
export default b;// 等同与 export {b as default}

export var c = 'c';
setTimeout(() => {
  console.log('settime')
}, 2000);
