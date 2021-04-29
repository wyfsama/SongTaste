import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import 'vant/lib/index.css';
import { Search, Tabbar, TabbarItem, NavBar, Icon, Swipe, SwipeItem, Lazyload } from 'vant';

Vue
  .use(Search)
  .use(Tabbar)
  .use(TabbarItem)
  .use(NavBar)
  .use(Icon)
  .use(Swipe)
  .use(SwipeItem)
  .use(Lazyload)

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
