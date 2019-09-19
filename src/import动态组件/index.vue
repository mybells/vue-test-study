<template>
  <div>
    <import-com></import-com>
  </div>
</template>

<script>
// import importCom from './import动态组件.vue'
export default {
  data() {
    return {
    }
  },
  components: {
    // importCom:(resolve)=>require(['./import动态组件.vue'],resolve),
    importCom: () => import('./import动态组件.vue'),
    // importCom,
  },
}
</script>