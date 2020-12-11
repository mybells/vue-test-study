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

    <div class="title">8.***********setTimeout,push,setImmediate,requestanimationframe***********</div>
    <moreData></moreData>

    <div class="title">9.***********在不同vue文件中import同一个js的影响***********</div>
    <importjs></importjs>
    <importjs2></importjs2>

    <div class="title">10.***********v-show是否缓存(会缓存)***********</div>
    <vshow></vshow>

    <div class="title">11.***********使用render***********</div>
    <render @btnClick="this.btnClick"></render>
    
    <div class="title">12.***********diff***********</div>
    <diff></diff>
    
    <div class="title">13.***********computed的依赖更新***********</div>
    <computed></computed>
  </div>
</template>

<script>
import './模块js/ES6的Module/moudle'
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
import vueSet from './other/vueset.vue'
import moreData from './other/moreData.vue'
import vshow from './other/vshow.vue'
import importjs from './importjstest/importjstest.vue'
import importjs2 from './importjstest/importjs2.vue'
import render from './render/render.vue'
import diff from './other/diff.vue'
import computed from './computed/index.vue'
import ss from './other/sss.json'

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
    vueSet,
    moreData,
    importjs,
    importjs2,
    vshow,
    render,
    diff,
    computed
  },
  data() {
    return {
      list: [1, 2, 3]
    }
  },
  created() {
    console.log(ss)
    var t = require('./other/sss.json');
    console.log(t)
    import('./other/sss.json').then(res=>{
      console.log(res)
    })
    
    
    console.log(process.env.NODE_ENV);
    this.list.map(function (item) {
      console.log(this)
      //VueComponent {_uid: 23, _isVue: true, $options: {…}, _renderProxy: Proxy, _self: VueComponent, …}
      //VueComponent {_uid: 23, _isVue: true, $options: {…}, _renderProxy: Proxy, _self: VueComponent, …}
      //VueComponent {_uid: 23, _isVue: true, $options: {…}, _renderProxy: Proxy, _self: VueComponent, …}
    }, this)
    this.list.map(function (item) {
      console.log(this)
      //undefined
    })
  },
  mounted() {
  },
  filters: {
  },
  methods: {
    btnClick(event,value) {
      console.log(event,value)
    }
  }
}
</script>
<style>
.title {
  margin-top: 20px;
}
</style>