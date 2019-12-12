<template>
  <div>
    {{obj}}
    <el-button type="primary" @click="change">change</el-button>
    {{a}}
  </div>

</template>

<script>
export default {
  data() {
    return {
      a: [{ a: 1 }, { b: 2 }, 3],
      obj: {
        arr: [{ a: 1 }, { b: 2 }],
        arr2: [{ a: 1 }, { b: 2 }],
      }
    }
  },
  methods: {
    change() {
      this.a[0] = 4;//不是响应的
      this.a[1].b = 4;//响应的
      // this.$set(this.obj.arr[0],'a',2);
      // this.obj.arr[0].a = 2;
    }
  },
}
</script>

<style scoped>
</style>