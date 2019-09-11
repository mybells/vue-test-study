<template>
  <div>
    child2
  </div>
</template>

<script>
  export default {
    methods: {
      getchild(){
        this.$router.push('child1');
      }
    },
  }
</script>

<style scoped>

</style>