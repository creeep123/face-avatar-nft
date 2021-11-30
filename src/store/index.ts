import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    LOADING: false,
    chosenAttr: {},
  },
  mutations: {
    showLoading(state) {
      console.log('<<< showloading >>> ');
      state.LOADING = true;
    },
    hideLoading(state) {
      console.log('<<< hideloading >>> ');
      state.LOADING = false;
    },
    changeChosenAttrs(state, attr) {
      console.log('<<< changeChosenAttrs >>> ');
      state.chosenAttr = attr;
    },
  },
  actions: {},
  modules: {},
});
