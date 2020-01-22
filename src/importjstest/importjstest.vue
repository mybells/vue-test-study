<template>
<div>
  <child></child>
</div>
</template>

<script>
import {x,y} from './importjs'
import Bus from './Bus.js'
// import * as importjs from './importjs'
import child from './importjschild.vue';
export default {
  created() {
/* test1:import引入的如果是*接收则完全不可修改，x,y接收的不能直接修改，只能修改对象，对象是个引用，后面import的会接收到修改后的值 */
    // importjs.a.x=22 这样导出的不能编辑，描述符set为undefined，不可编辑
    x.a = 44;
    x.b = "b";
    // a = 44;//编译报错
    // y = 44;//编译报错
    console.log(x,y);//{a:44,b:"b"},2


/* test2:中央事件bus,给Bus中_event事件对象中订阅添加function,然后执行销毁调用$off清除事件，所以child和importjs2中发布事件不会起作用 */
    Bus.$on('event',(x)=>{debugger;console.log(x,'eeeeeeeeeeeeeeeeeeeeeeee')});
    this.$destroy();
  },
  destroyed() {
    Bus.$off();
  },
  components: {
    child
  },
}
</script>

<style scoped>

</style>
