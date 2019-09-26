window.Vue = require("vue");
import 'app.scss' 
Vue.component("welcomeView", require("./components/Welcome.vue").default);

const app = new Vue({
  el: "#app"
});
