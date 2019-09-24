import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);
let config = new Vuex.Store({
  state: {
    wat: 0,
    key: '1',
    count: 0
  },
  mutations: {
    updateKey(state, payload) {
      state.key = payload;
    },
    updateWat(state, payload) {
      state.wat = payload;
    },
    updateCount(state, payload) {
      setTimeout(() => {
        state.count += 1;
      }, 2000);
    },
    updateCountx(state, payload) {
        state.count += 1;
    }
  },
  actions: {
    asyncUpdateCount(context, payload) {
      setTimeout(() => {
        // context.state.count += 1;//这种是可以的，页面会响应。但是在vue devtool状态管理中监听不到变化。
        context.commit('updateCountx')
      }, 2000);
    }
  }
});
// watch(fn: Function, callback: Function, options?: Object): Function
// 响应式地侦听 fn 的返回值（state.wat），当值改变时调用回调函数(2)。fn 接收 store 的 state 作为第一个参数，其 getter 作为第二个参数。最后接收一个可选的对象参数表示 Vue 的 vm.$watch 方法的参数。
// 要停止侦听，调用此方法返回的函数即可停止侦听。

// 监听state在第一个函数中
config.watch((state)=>{
  return state.wat + 1;
  //当state改变时进入这个函数，当返回值state.wat改变时，调用第二个函数参数为返回值。
},(newCount)=>{
  console.log(newCount);//3
  // state.wat + 1
  // 第一个参数发生变化，出发第二个参数方法
})
export default config