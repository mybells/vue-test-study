import Vue from 'vue'
import VueRouter from 'vue-router'
import v1 from './v1.vue'
import v2 from './v2.vue'

Vue.use(VueRouter)

export default new VueRouter({
  routes:[
    { path: '/', components: () => import(/* webpackChunkName: "home" */ "./v1.vue") },
    // { path: '/bar', components: v2 }
  ]
})