import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import mybells from 'mybellss';
import store from './vuex/store.js';
import router from '@/router/router';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);
Vue.use(mybells);

Vue.config.productionTip = false;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");