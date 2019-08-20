<template>
  <div>
    <!-- <directive></directive> -->
    <vuedata></vuedata>
  </div>
</template>

<script>
  import directive from './vue指令.vue'
  import vuedata from './vueWatch与data.vue'
  export default {
    data() {
      return {
      }
    },
    components:{
      directive,
      vuedata
    }
  }
</script>

<style scoped>

</style>