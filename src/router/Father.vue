<template>
  <div>
    <div :class="$style.father">father</div>
    <el-button type="primary" @click="getchild">getchild1</el-button>
    <router-view s="sss"></router-view>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    methods: {
      getchild(){
        this.$router.push('/child1');
      }
    },
  }
</script>

<style module>
.father{
  color:yellow;
}
</style>