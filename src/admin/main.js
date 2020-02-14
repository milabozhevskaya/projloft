import Vue from 'vue';
import App from './App.vue'
import routes from './router/routes';
import{ store } from './store';
// import "@babel/polyfill";
import $axios from './requests';

store.$axios = $axios;

new Vue({
  el: "#app-root",
  router:routes,
  store,
  render: h => h(App)
});