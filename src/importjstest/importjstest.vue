<template>
<div>
  <child></child>
</div>
</template>

<script>
import {x,y} from './importjs'
// import * as importjs from './importjs'
import child from './importjschild.vue';
export default {
  created() {
    // importjs.a.x=22 这样导出的不能编辑，描述符set为undefined，不可编辑
    x.a = 44;
    // a = 44;//编译报错
    // y = 44;//编译报错
    console.log(x,y);//{a:44},2
  },
  components: {
    child
  },
}
</script>

<style scoped>

</style>
