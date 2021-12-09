import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    LOADING: false,
    AGE: '',
    BEAUTY: '',
    PIXEL64: '',
    GENDER: '',
    SKIN: '',
    chosenAttr: {},
    faceInfoRaw: {},
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
    changeFaceInfoRaw(state, raw) {
      console.log('<<< changeChosenAttrs >>> ');
      state.faceInfoRaw = raw;
    },
    changeAge(state, age) {
      console.log('<<< changeAge >>> ');
      state.AGE = age;
    },
    changeBeauty(state, beauty) {
      console.log('<<< changeBeauty >>> ');
      state.BEAUTY = beauty;
    },
    changeSkin(state, Skin) {
      console.log('<<< changeSkin >>> ');
      state.SKIN = Skin;
    },
    changePixel64(state, Pixel64) {
      console.log('<<< changePixel64 >>> ');
      state.PIXEL64 = Pixel64;
    },
    changeGender(state, Gender) {
      console.log('<<< changeGender >>> ');
      state.GENDER = Gender;
    },
  },
  actions: {},
  modules: {},
});
