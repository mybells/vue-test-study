<template>
  <div>
    {{obj}}
    <el-button type="primary" @click="change">change</el-button>
    <el-button type="primary" @click="change2">forceUpdate</el-button>
    {{a}}
    <div>{{form.x}}</div>
    <div>{{form.y}}</div>
  </div>

</template>

<script>
export default {
  data() {
    return {
      form:{},
      a: [{ a: 1 }, { b: 2 }, 3],
      obj: {
        arr: [{ a: 1 }, { b: 2 }],
        arr2: [{ a: 1 }, { b: 2 }],
      }
    }
  },
  created() {
    this.form.x = "x";//在created中数据已经响应式处理完毕，只不过没有挂载上去。在mounted中会将form.x渲染上去，但是不是响应式的。
  },
  methods: {
    change() {
      this.a[0] = 4;//不是响应的
      // this.a[1].b = 4;//响应的，因为是对象，这个不知道啥原因只要改变就会全部$forceUpdate

      this.form.x = "xchange";//不是响应的
      this.form.y = "ychange";//不是响应的
      // this.$set(this.obj.arr[0],'a',2);//响应的
      // this.obj.arr[0].a = 2;//响应的
    },
    change2() {
      this.$forceUpdate()
    }
  },
}
</script>

<style scoped>
</style>