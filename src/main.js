import Vue from 'Vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui';
import mybells from 'mybellss';
import store from './vuex/store.js';
import router from './router/router';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(VueRouter)//这里要注册
// import './模块js/ES6的Module/moudle'
// import './模块js/CommonJS模块化/CommonJS'
// import './模块js/AMD模块化/amd'
// import './模块js/CMD模块化/cmd'

Vue.use(ElementUI);
Vue.use(mybells);

Vue.config.productionTip = false;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");