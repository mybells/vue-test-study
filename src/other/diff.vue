<template>
  <div>
    <ul>
      <li v-for="(item, index) in arr" :title="item" :key="index">{{item}}</li>
    </ul>
    判断 sameNode 的时候，只会判断key、 tag、是否有data的存在（不关心内部具体的值）、是否是注释节点、是否是相同的input type，来判断是否可以复用这个节点。
    
    翻转后，旧首节点和新首节点用sameNode对比。 这一步命中逻辑,然后patchNode改变了item值，但是不应该新的第一个复用旧的第一个，应该翻转后新的第一个直接复用旧的最后一个，这样就提升了性能。
    <el-button @click="reverse">翻转</el-button>
    <el-button @click="del">shift</el-button>

    <div>
      <item
          :key="index"
          v-for="(num, index) in arr"
          :num="num"
          :class="`item${num}`"
        ></item>
    </div>
    删除第一个导致，新的第一个和旧的第一个直接复用，第二个和第二个复用，剩余了最后一个直接删除，导致diff出现问题。所以最好定义key为唯一的id
  </div>
</template>

<script>
  export default {
    data() {
      return {
        arr:[1,2,3,4,5]
      }
    },
    components: {
      item: {
        props: ["num"],
        template: `
                <div>
                    {{Math.random()}}
                </div>
            `,
        name: "child"
      }
    },
    methods: {
      reverse() {
        this.arr.reverse();
      },
      del() {
        this.arr.shift();
      }
    },
  }
</script>

<style>

</style>