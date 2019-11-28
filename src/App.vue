<template>
  <div id="app">
    <div class="title">1.***********vue指令***********</div>
    <directive></directive>

    <div class="title">2.***********import动态组件***********</div>
    <import-async></import-async>

    <div class="title">3.***********vuex***********</div>
    <vuex></vuex>

    <div class="title">4.***********router***********</div>
    <router-link :to="{path:'/123'}">home</router-link>
    <router-link to="/foo">foo</router-link>
    <router-link to="/bar">bar</router-link>
    <router-link to="/father">father</router-link>
    <router-view></router-view>

    <div class="title">5.***********vueWatch与data***********</div>
    <vuewatchdata></vuewatchdata>

    <div class="title">6.***********Css Modules Scoped***********</div>
    <css-modules></css-modules>

    <div class="title">7.***********npm publish***********</div>
    <npm-publish></npm-publish>

    <div class="title">7.***********vueloder自定义块***********</div>
    <ComponentA></ComponentA>

    <div class="title">8.***********$set***********</div>
    <vueSet></vueSet>
  </div>
</template>

<script>
// import './模块js/ES6的Module/moudle'
// import './模块js/CommonJS模块化/CommonJS'
// import './模块js/AMD模块化/amd'
// import './模块js/CMD模块化/cmd'

import directive from './vue指令/vue指令.vue'
import vuewatchdata from './vueWatch与data/father.vue'
import vuex from './vuex/vuex.vue'
import importAsync from './import动态组件/index.vue'
import cssModules from './cssModule/cssmodule与scoped.vue'
import npmPublish from './publishNpm/index.vue'
import ComponentA from './vueloder自定义块/ComponentA.vue'
import vueSet from './other/vueSet.vue'
export default {
  name: 'App',
  components: {
    directive,
    vuewatchdata,
    vuex,
    importAsync,
    cssModules,
    npmPublish,
    ComponentA,
    vueSet
  },
  data() {
    return {
      list:[1,2,3]
    }
  },
  created() {
    console.log(process.env.NODE_ENV);
    this.list.map(function(item) {
      console.log(this)
      //VueComponent {_uid: 23, _isVue: true, $options: {…}, _renderProxy: Proxy, _self: VueComponent, …}
      //VueComponent {_uid: 23, _isVue: true, $options: {…}, _renderProxy: Proxy, _self: VueComponent, …}
      //VueComponent {_uid: 23, _isVue: true, $options: {…}, _renderProxy: Proxy, _self: VueComponent, …}
    },this)
    this.list.map(function(item) {
      console.log(this)
      //undefined
    })
  },
  mounted() {
  },
  filters: {
  },
  methods: {
  }
}
</script>
<style>
.title {
  margin-top: 20px;
}
</style>