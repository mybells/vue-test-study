import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    key: '1',
    count:0
  },
  mutations: {
    updateKey(state, payload) {
      state.key = payload;
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