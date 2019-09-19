<template>
  <div>
    <el-button type="primary" @click="getval()">触发npm函数</el-button>
  </div>
</template>

<script>
export default {
  methods: {
    getval() {
      this.$sss('abc')//npm中的方法,alert('abc')
    }
  },
}
</script>

<style scoped>
</style>