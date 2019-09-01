<template>
  <div>
    //////////** vuex **///////////
    vuex:{{key}}
    count:{{count}}
    <el-button type="primary" @click="setkey">mutation</el-button>
    <el-button type="primary" @click="setkey2">action</el-button>
  </div>
</template>

<script>
import store from './store.js';
// import mapMutations from 'Vuex';
  export default {
    data() {
      return {
        // key:store.state.key
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
    watch: {
      '$store.state.key':function(x,y){
        console.log(x,y)
      }
    },
    computed: {
      count(){
        return this.$store.state.count
      }
    },
    methods: {
      setkey(){
        this.$store.commit('updateCount')
      },
      setkey2(){
        this.$store.dispatch('asyncUpdateCount',1)
      }
    },
  }
</script>

<style scoped>

</style>