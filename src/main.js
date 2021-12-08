<<<<<<< HEAD
import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false
=======
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
>>>>>>> 8152b853ac2b7e7e2b31a0721e458ffe0da2a145

const router = new VueRouter({
  mode: 'history',
  routes
});

new Vue({
  router,
  render: h => h(App)
<<<<<<< HEAD
}).$mount('#app')
=======
}).$mount('#app');
>>>>>>> 8152b853ac2b7e7e2b31a0721e458ffe0da2a145
