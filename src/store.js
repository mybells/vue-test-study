import Vue from 'Vue'
import Vuex from 'Vuex'
Vue.use(Vuex);
export const store = new Vuex.Store({
  state: {
    key: '1'
  },
  mutations: {
    updateKey(state, payload) {
      state.key = payload;
    }
  }
});