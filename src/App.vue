<template>
  <div>
    <!-- <directive></directive> -->
    <vuedata ref="vuedata"></vuedata>
  </div>
</template>

<script>
  import directive from './vue指令.vue'
  import vuedata from './vueWatch与data.vue'
  export default {
    data() {
      return {
        ss:''
      }
    },
    components:{
      directive,
      vuedata
    },
    created() {
      
    },
    mounted() {
      this.$children[0].b="bbb"//组件中b变为bbb，两秒后变为123
      setTimeout(() => {
        this.$refs.vuedata.b=123
      }, 2000);
      this.$emit('test', 'hi')
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