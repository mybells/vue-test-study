const b = "b";
export default b;// 等同与 export {b as default}

export var c = 'c';

var d = 'd';
var e = 'e';
var obj = {obx:1};
export { d, e, obj }
export { d as s1, e as s2 }

export function f() { console.log('f') }
function x() {}
// export x;编译报错
