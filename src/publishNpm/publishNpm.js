const install = function (Vue, options) {
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
// 1.执行npm run npmbuild
// 2.在./dist中修改package.json版本号，执行npm publish，不行就先登录npm login