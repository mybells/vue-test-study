<template>
  <div>
    <div>extend components加载</div>
    <MyComponent></MyComponent>
    
    <div>extend 直接挂载</div>
    <div id="cvb"></div>

    <div>import copy computed</div>
    <div id="abc"></div>
    
    <div>computed不同方式加载</div>
    <computed></computed>
    <computedExtend></computedExtend>
  </div>
</template>

<script>
  import Vue from 'vue';
  import computed from '../computed/index.vue'
  var computedExtend = Vue.extend(computed);
  var MyComponent2 = Vue.extend({ // MyComponent == MyComponent2
    template: '<a>{{list}}223b</a>',
    data() {
      return {
        list: 'hhhh'
      }
    }
  })
  console.log(MyComponent2);// ƒ VueComponent(options) 可以直接在components中引入
  export default {
    components:{
      MyComponent: MyComponent2,
      computed: computed, // {computed: {…}, methods: {…}, staticRenderFns: Array(0), data: ƒ, render: ƒ, …}
      computedExtend: computedExtend, // ƒ VueComponent(options)
      
    },
    mounted() {
      console.log("computed",computed);// {computed: {…}, methods: {…}, staticRenderFns: Array(0), data: ƒ, render: ƒ, …}
      let extend = Vue.extend(computed);// ƒ VueComponent(options)
      new extend().$mount('#abc');

      let newMyComponent2 = new MyComponent2(); // VueComponent {} 实例
      console.log("newMyComponent2", newMyComponent2)
      newMyComponent2.$mount('#cvb');
      
      // 实例等同于this，可以直接使用$mount挂载到id节点上，
      // components对象中可以使用对象和函数，函数=Vue.extend(对象)
      // 实例=new 函数();
      
      
      
/*       var MyComponent = Vue.extend({
        template: '<div>Hello!</div>'
      })

      // 创建并挂载到 #app (会替换 #app)
      new MyComponent().$mount('#app')

      // 同上
      new MyComponent({ el: '#app' })

      // 或者，在文档之外渲染并且随后挂载
      var component = new MyComponent().$mount()
      document.getElementById('app').appendChild(component.$el) */
    }
  }
</script>

<style>

</style>