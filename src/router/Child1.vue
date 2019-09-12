<template>
  <div>
    xxxx
    {{1234}}
  </div>
</template>

<script>
  export default {
    created() {
      let vm=this;
      debugger;
    },
    methods: {
      getchild(){
        this.$router.push('child1');
      }
    },
  }
</script>

<style scoped>

</style>