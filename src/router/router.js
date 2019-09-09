import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }

export default new VueRouter({
  routes:[
    { path: '/foo', component: Foo },
    { path: '/bar', component: Bar }
  ]
})