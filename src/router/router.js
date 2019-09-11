import Vue from 'vue'
import Router from 'vue-router'
import Father from './Father.vue'
import Child1 from './Child1.vue'
import Child2 from './Child2.vue'
Vue.use(Router)

const Home = { template: `
<div class="user">
  <h2>home {{ $route.params.id }}</h2>
  <router-view></router-view>
</div>
` }
const HomeChildren = { template: '<div>HomeChildren</div>' }
const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }
export default new Router({
  routes:[
    { path: '/', component: Home,children:[
      { path: '', component: HomeChildren },
    ] },
    { path: '/foo', component: Foo },
    { path: '/bar', component: Bar },
    { path: '/father', component: Father,
      children:[
        { path: '/child1', component: Child1 },
        { path: '/child2', component: Child2 },
      ]
    },

  ]
})