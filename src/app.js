window.Vue = require("vue");

Vue.component("welcomeView", require("./components/Welcome.vue").default);

const app = new Vue({
  el: "#app"
});
