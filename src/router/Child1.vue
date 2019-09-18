<template>
  <div>
    xxxx
    {{1234}}
    <!-- <div class="child1">child1</div> -->
    <div :class="aaa.child1">child1</div>
    <!-- <div id="ss">s</div> -->
    <!-- <div :class="styles.test">child1</div> -->
  </div>
</template>

<script>
  // import styles from "./style.css";
  export default {
    created() {
      let vm=this;
      console.log(this.aaa)//{child1: "_2mExwqh3HrpsMmXmkoOXC-"}
    },
    mounted() {
      // debugger;
      // console.log(styles)
      // document.getElementById('ss').innerHTML = '<div class="' + styles.test + '">你你你</div>';
    },
    methods: {
      getchild(){
        this.$router.push('child1');
      }
    },
  }
// <style scoped>
// .child1{
//   color:crimson;
// }
// </style>
</script>
<style module="aaa">
.child1{
  color:crimson;
  /* composes: className from "./style.css"; */
}
</style>