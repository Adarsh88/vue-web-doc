import Vue from "vue";
import VueRouter from 'vue-router';

import App from "./App.vue";

import SaveDoc from "./assets/components/SaveDoc.vue";
import SeeDoc from "./assets/components/SeeDoc.vue";


Vue.use(VueRouter);

const routes = [
  { path: "/", component: SeeDoc },
  { path: "/view", component: SeeDoc },
  { path: "/save", component: SaveDoc },
];

const router = new VueRouter({
  mode: 'history',
  routes
});

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
