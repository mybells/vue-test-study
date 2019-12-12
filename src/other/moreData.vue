<template>
  <div>
    <!-- setTimeout push DOM渲染 -->
    <el-button type="primary" @click="change">开始加载</el-button>
    <el-button type="primary" @click="change1">setTimeout</el-button>
    <el-button type="primary" @click="change11">setInternal</el-button>
    <el-button type="primary" @click="change2">setImmediate</el-button>
    <el-button type="primary" @click="change3">requestAnimationFrame</el-button>
    <div v-for="(item,i) in items" :key="i">
      {{ item }}
    </div>
  </div>

</template>

<script>
import { setInterval } from 'timers';
export default {
  data() {
    return {
      items: []
    }
  },
  methods: {
    change() {
      for (let i = 0; i < 100000; i++) {
        this.items.push(i);//不会一个一个渲染，直接渲染100000个，数据多了会卡顿
      }
    },
    change1() {
      console.time('setTimeout');
      for (let i = 0; i < 10000; i++) {
        setTimeout(() => {
          this.items.push(i);//会一个一个渲染，有点慢，没办法控制时间
        }, 0);
      }
      console.timeEnd('setTimeout');
    },
    change11() {
      console.time('setInterval');
      let i = 0;
      let x = setInterval(() => {
        this.items.push(i);//会一个一个渲染，有点慢，没办法控制时间
        i++;
        if (i > 10000) {
          clearInterval(x);
        }
      }, 0);
      console.timeEnd('setInterval');
    },
    change2() {
      for (let i = 0; i < 5000; i++) {
        setImmediate(() => {
          this.items.push(i);//等I/O空闲时加载,数据多了会卡顿，没办法控制
        })
      }
    },
    change3() {
      var i = 0;
      let vm = this;
      console.time('requestAnimationFrame');
      var s = requestAnimationFrame(function fn() {
        // for (let x = 0; x < 1000; x++) {
        vm.items.push(i);//这个性能最好
        i++;
        // }
        if (i < 10000) {
          requestAnimationFrame(fn)
        } else {
          window.cancelAnimationFrame(s);
        }
      })
      console.timeEnd('requestAnimationFrame');
    }
  },
}
</script>

<style scoped>
</style>