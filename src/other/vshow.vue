<template>
  <div>
    <el-input v-model="text1" placeholder="1" v-show="condition"></el-input>
    <el-input v-model="text2" placeholder="2" v-show="!condition"></el-input>
    <el-button type="default" @click="condition=!condition">changeinput</el-button>

  </div>
</template>

<script>
  export default {
    data() {
      return {
        condition:true,
        text1:'',
        text2:''
      }
    },
  }
</script>

<style scoped>

</style>