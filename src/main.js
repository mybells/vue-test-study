import Vue from 'Vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import mybells from 'mybellss';
import 'element-ui/lib/theme-chalk/index.css';

// import './js/ES6的Module/moudle'
// import './js/CommonJS模块化/CommonJS'
// import './js/AMD模块化/amd'
// import './js/CMD模块化/cmd'

Vue.use(ElementUI);
Vue.use(mybells);

new Vue({
  ...App
}).$mount('#app')