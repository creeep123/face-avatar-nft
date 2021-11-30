import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import 'remixicon/fonts/remixicon.css';
import i18n from './i18n';
import api from './service.js';

Vue.config.productionTip = false;
Vue.prototype.$api = api;
Vue.prototype.$store = store;

new Vue({
  router,
  store,
  i18n,
  render: (h) => h(App),
}).$mount('#app');
