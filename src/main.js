import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import mybells from 'mybellss';
import store from './vuex/store.js';
import router from '@/router/router';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);
Vue.use(mybells);

/* 全局注册组件 */
Vue.component('aaa',{
  template: '<a>{{list}}223</a>',
  data() {
    return {
      list: 'hhhh'
    }
  },
})
var MyComponent = Vue.component('aaa');// ƒ VueComponent(options)

var MyComponent2 = Vue.extend({ // MyComponent == MyComponent2
  template: '<a>{{list}}223b</a>',
  data() {
    return {
      list: 'hhhh'
    }
  }
})
console.log(MyComponent2);// ƒ VueComponent(options)
let a = new MyComponent2();
console.log(a)// VueComponent{}

Vue.component('bbb', MyComponent2);

Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");