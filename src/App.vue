<template>
  <div id="app">
    <!-- <directive></directive> -->
    {{ss|filterss}}
    {{ss}}
    <import-com></import-com>
    <vuedata ref="vuedata" :ss="ss|filterss"></vuedata>
    <vuex></vuex>

    <router-link to="/">home</router-link>
    <router-link to="/foo">foo</router-link>
    <router-link to="/bar">bar</router-link>
    <router-link to="/father">father</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
  import directive from './vue指令.vue'
  import vuedata from './vueWatch与data.vue'
  import vuex from './vuex/vuex.vue'
  // import importCom from './import动态组件/import动态组件.vue'
  export default {
    name: "App",
    data() {
      return {
        ss:'xxx'
      }
    },
    components:{
      directive,
      vuedata,
      // importCom:(resolve)=>require(['./import动态组件/import动态组件.vue'],resolve),
      importCom:() => import('./import动态组件/import动态组件.vue'),
      // importCom,
      vuex
    },
    created() {
      // this.$sss('abc')//npm中的方法
    },
    mounted() {
      this.$children[0].b="bbb"//组件中b变为bbb，两秒后变为123
      setTimeout(() => {
        this.$refs.vuedata.b=123
      }, 2000);
      this.$emit('test', 'hi')
    },
    filters: {
      filterss: function(value) {
        return value+1//会将改变后的值传到子组件中
      }
    },
    methods: {
      sd(){
        console.log(this.ss)
      }
    },
  }
</script>

<style scoped>

</style>