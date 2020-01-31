<template>
<div>

</div>
</template>

<script>
import Bus from './Bus.js'
import * as importjs from './importjs'
export default {
  created() {
    console.log(importjs);//{x:{a:44,b},y:2}
  },
  mounted() {
    //由于parent已经销毁中执行$off，所以发布事件不起作用。import的Bus是parent组件中import后修改后的Bus，是个引用对象。并不是拷贝。
    console.log(Bus)//_event[(x)=>{console.log(x,'eeeeeeeeeeeeeeeeeeeeeeee')}]
    Bus.$emit('event','child')
  },
}
</script>

<style scoped>

</style>
