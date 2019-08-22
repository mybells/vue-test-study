let install = function (Vue, options) {
  // 4. 添加实例方法
  Vue.prototype.$sss = function (methodOptions) {
    alert(methodOptions)
  }
}
if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}
export default install;
// 发布到npm
//1.修改webpack配置文件，entry:'./src/publishNpm.js',执行yarn start,然后将dist中bundle.js文件放到publish文件夹中
//2.在publish中修改package.json版本号，执行npm publish，不行就先登录npm login
