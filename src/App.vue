<template>
  <div>
    <!-- <directive></directive> -->
    {{ss|filterss}}
    {{ss}}
    <vuedata ref="vuedata" :ss="ss|filterss"></vuedata>
  </div>
</template>

<script>
  import directive from './vue指令.vue'
  import vuedata from './vueWatch与data.vue'
  export default {
    data() {
      return {
        ss:'xxx'
      }
    },
    components:{
      directive,
      vuedata
    },
    created() {
      debugger;
      this.$sss('abc')
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