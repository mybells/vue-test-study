import Vue from 'Vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import mybells from 'mybellss';
import {store} from './vuex/store.js';
import 'element-ui/lib/theme-chalk/index.css';

import './模块js/ES6的Module/moudle'
// import './模块js/CommonJS模块化/CommonJS'
// import './模块js/AMD模块化/amd'
// import './模块js/CMD模块化/cmd'

Vue.use(ElementUI);
Vue.use(mybells);

new Vue({
  store,
  ...App
}).$mount('#app')