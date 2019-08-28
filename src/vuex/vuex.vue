<template>
  <div>
    {{key}}
  </div>
</template>

<script>
import {store} from './store.js';
// import mapMutations from 'Vuex';
  export default {
    data() {
      return {
        key:0
      }
    },
    created() {
      setTimeout(() => {
        this.$store.commit('updateKey','value')
        this.key=this.$store.state.key
      }, 2000);
      this.key=this.$store.state.key
      setTimeout(() => {
        this.$store.state.key=4
        this.key=store.state.key
      }, 1000);

      var x=function(){
        return [1,2,3]
      }
      console.log(x()[0])//1
    },
    computed: {
      // key(){
      //   return this.$store.state.key
      // }
    },
  }
</script>

<style scoped>

</style>