import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import SaveDoc from "./assets/components/SaveDoc.vue";
import SeeDoc from "./assets/components/SeeDoc.vue";

let SaveDoc2 = { template: "<div>SaveDoc</div>" };
let SeeDoc2 = { template: "<div>SeeDoc</div>" };

const routes = [
  { path: "/SaveDoc", component: SaveDoc },
  { path: "/SeeDoc", component: SeeDoc }
];

new Vue({
  el: "#app",
  render: h => h(App)
});
