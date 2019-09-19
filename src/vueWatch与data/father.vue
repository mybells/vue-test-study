<template>
  <div>
    {{ss}}
    {{ss|filterss}}
    <vuedata ref="vuedata" :ss="ss|filterss"></vuedata>
  </div>
</template>

<script>
import vuedata from './vueWatch与data.vue'
export default {
  data() {
    return {
      ss: 'xxx'
    }
  },
  components: {
    vuedata
  },
  created() {
  },
  mounted() {
    this.$children[0].b = "bbb"//组件中b变为bbb，两秒后变为123
    setTimeout(() => {
      this.$refs.vuedata.b = 123
    }, 2000);
    this.$emit('test', 'hi')
  },
  filters: {
    filterss: function (value) {
      return value + 1//会将改变后的值传到子组件中
    }
  },
  methods: {
  },
}
</script>

<style scoped>
</style>