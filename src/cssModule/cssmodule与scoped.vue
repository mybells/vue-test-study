<template>
  <div>
    <child class="appvuex"></child>
  </div>
</template>

<script>
import child from './child.vue';
  export default {
    components:{
      child
    }
  }
</script>

<style scoped>
/* 在scoped条件下给子组件设置样式，以下三种都可以 */
.appvuex ::v-deep .vuex{
  color: brown;
}
/* .appvuex/deep/ .vuex{
  color: brown;
}
.appvuex /deep/ .vuex{
  color: brown;
}
.appvuex >>> .vuex{
  color: brown;
} */
</style>