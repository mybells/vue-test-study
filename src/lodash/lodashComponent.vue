<template>
  <div>
    <el-button @click="handlerClick">共享相同的防抖函数（错误用法）</el-button>
    <el-button @click="debounceClick">组件实例彼此独立 点击</el-button>
  </div>
</template>

<script>
  import _ from 'lodash';
  export default {
    created () {
      this.debounceClick = _.debounce(this.click, 5000);
    },
    methods: {
      handlerClick: _.debounce(function() {
        // ... 响应点击 ...
        console.log('lodash响应点击❌');
      }, 5000),
      click() {
        console.log('lodash响应点击✅');
      },
      beforeDestroy() {
        debugger;
        this.debounceClick.cancel();
      },
    }
  }
</script>

<style scoped>

</style>