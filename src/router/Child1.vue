<template>
  <div>
    Child1
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