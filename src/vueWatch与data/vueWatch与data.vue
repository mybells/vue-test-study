<template>
  <div>
    {{b}}
  </div>
</template>

<script>
  export default {
    props: ['ss'],
    data() {
      return {
        _a: 'a',
        b: 'b',
        arr: [1, 2, 3]
      }
    },
    watch: {
      // arr(val,oldval){
      //   //当arr数组新增或者改变时会触发
      // },
      // arr:'watchmethod',//执行methods中的watchmethod事件,传两个参数val,oldval
      arr: [// 会按照数组下标顺序执行
        'watchmethod', // watchmethod
        function handler2(val, oldVal) { // 再执行handler2
        },
        { // 最后执行handler3
          handler: function handler3 (val, oldVal) { /* ... */ }
          /* ... */
        }
      ]
    },
    created() {
      const a = this._a// undefined
      const b = this.$data._a// a
      this.arr.push(4)
    },
    mounted() {
      this.$parent.$on('test', function (msg) {
        console.log(msg)
      })
    },
    methods: {
      watchmethod(val, oldval) {
        // 数组改变时触发这个函数
      }
    }
  }
</script>

<style lang="stylus" scoped>

</style>