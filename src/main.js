import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false;
Vue.use(ElementUI);
import "./style/index.css" //全局样式
if(process.env.NODE_ENV==='development'){
  require("./mock")
}

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
