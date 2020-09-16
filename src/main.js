import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// import global style
import "@/assets/style/reset.scss";

// install

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
