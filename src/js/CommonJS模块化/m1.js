module.exports = { a: 12, foo: function(){setTimeout(() => {
  console.log(this.a)
}, 3000); } }
exports.str = 'sss'//module.exports与exports.str同时存在，只有module.exports有效
// module.exports = function(){ return {a: 12} }//会导出最后一个module.exports