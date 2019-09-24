<template>
  <div>
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
        key: 0
      }
    },
    created() {
      // this.$store.state.wat = 4
      // watch(fn: Function, callback: Function, options?: Object): Function
      // 响应式地侦听 fn 的返回值，当值改变时调用回调函数。fn 接收 store 的 state 作为第一个参数，其 getter 作为第二个参数。最后接收一个可选的对象参数表示 Vue 的 vm.$watch 方法的参数。
      // 要停止侦听，调用此方法返回的函数即可停止侦听。
      this.$store.watch((state)=>{
        return state.wat + 1;
        //当state改变时进入这个函数，当返回值state.wat改变时，调用第二个函数参数为返回值。
      },(newCount)=>{
        console.log(newCount);//3
        // state.wat + 1
        // 第一个参数发生变化，出发第二个参数方法
      })
      this.$store.commit('updateWat', 2)

      setTimeout(() => {
        this.$store.commit('updateKey', 'value')
        this.$store.replaceState({key:20,count:10,wat:30})
        this.key = this.$store.state.key
      }, 2000);
      this.key = this.$store.state.key
      setTimeout(() => {
        this.$store.state.key = 4
        this.key = store.state.key
      }, 1000);

      var x = function() {
        return [1, 2, 3]
      }
      console.log(x()[0])// 1
    },
    watch: {
      '$store.state.key': function(x, y) {
        console.log(x, y)
      }
    },
    computed: {
      count() {
        return this.$store.state.count
      }
    },
    methods: {
      setkey() {
        this.$store.commit('updateCount')
      },
      setkey2() {
        this.$store.dispatch('asyncUpdateCount', 1)
      }
    }
  }
</script>

<style scoped>

</style>