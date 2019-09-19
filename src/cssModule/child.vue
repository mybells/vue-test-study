<template>
  <div>
    scoped与css modules{{1234}}<!-- scoped与css modules1234 -->
    <h4 class="vuex">获取父组件scoped中样式</h4>
    <div class="scoped">scoped样式</div>
    <div :class="$style.style">默认module样式</div>
    <div :class="aaa.child1">aaa自定义module样式</div>
    <div :class="bbb.child2">bbb自定义module样式</div>
    <div class="test">@import样式</div>
    <div id="ss">ja样式</div>
  </div>
</template>

<script>
  import test from "./style.css";
  export default {
    created() {
      console.log(this.aaa)//{child1: "_2mExwqh3HrpsMmXmkoOXC-"}
    },
    mounted() {
      debugger;
      document.getElementById('ss').innerHTML = '<div class="' + test + '">你你你</div>';
    },
    methods: {
      getchild(){
        this.$router.push('child1');
      }
    },
  }
</script>
<style scoped>
.scoped{
  color:crimson;
}
</style>

<style lang="styl" module>
.style
  color:green
</style>

<style module="aaa">
.className {
  color: green;
  background: red;
}
.child1 {
  composes: className;
  color:yellow;
}
</style>

<style module="bbb">
.child2 {
  composes: test from "./style.css";/* test必须和style.css中类名一样 */
}
</style>

<style>
@import url("./style.css");
</style>