import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import header from './components/header.vue';
import about from './components/pages/about.vue';

const routes = [
  {
    path: '/',
    components: header
  },
  {
    path: '/view',
    components: about
  }
];

export default new VueRouter({ routes, mode: 'history' });