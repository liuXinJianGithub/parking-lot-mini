// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/index'
import MintUI from 'mint-ui'
import axios from 'axios'
import store from './store/store'
import { Button, Cell } from 'mint-ui'
import { Swipe, SwipeItem } from "mint-ui";
import { Header } from 'mint-ui';

Vue.component(Header.name, Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.prototype.$axios = axios
Vue.use(MintUI)


Vue.component(Button.name, Button)
Vue.component(Cell.name, Cell)

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
