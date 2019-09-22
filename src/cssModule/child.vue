<template>
  <div>
    scoped与css modules{{1234}}<!-- scoped与css modules1234 -->
    <h4 class="vuex">获取父组件scoped中样式</h4>
    <div class="scoped">scoped样式</div>

    <div class="title"></div>
    <div :class="$style.localxxx">默认module,local样式</div>
    <div class="globalxxx">默认module,global样式</div>
    <div :class="$style.normal">默认module样式</div>

    <div class="title"></div>
    <div :class="aaa.child1">aaa自定义module样式</div>
    <div :class="bbb.child2">bbb自定义module样式</div>
    <div :class="ccc.lessstyle">less ccc自定义module样式</div>
    <div :class="ddd.style">styl ddd自定义module样式</div>

    <div class="title"></div>
    <div class="testxx">@import样式</div>

    <div class="title"></div>
    <div id="ss"></div>
  </div>
</template>

<script>
  // import styles from "./style.module.css?module";
  import styles from "./style.css?module";
  export default {
    created() {
      console.log(this.$style)// {child1: "_2mExwqh3HrpsMmXmkoOXC-"}
      console.log(this.aaa)// {child1: "_2mExwqh3HrpsMmXmkoOXC-"}
    },
    mounted() {
      // 显式的局部作用域语法:local(.className)，等同于.className
      document.getElementById('ss').innerHTML = `
      <div class="${styles.test}">js中导入的css</div>
      <div class="global">global样式</div>
      <div class="${styles.local}">local样式</div>
      `;
    },
    methods: {
      getchild() {
        this.$router.push('child1');
      }
    }
  }
</script>
<style scoped>
.scoped{
  display: flex;
  color:crimson;
}
</style>

<style module>
/* 显式的局部作用域语法:local(.localxxx)，等同于.localxxx */
:local(.localxxx){
  color:green
}
:global(.globalxxx){
  color:skyblue
}
.normal{
  color: blueviolet;
}
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

<style lang="less" module="ccc">
.lessstyle{
  color:brown
}
</style>

<style lang="styl" module="ddd">
.style
  color:orange
</style>

<style>
  @import url("./style.module.css");
</style>