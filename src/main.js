// import 'mint-ui/lib/style.css'
import './assets/style.css'
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import axios from 'axios'
import Mint from 'mint-ui';
import { Field } from 'mint-ui';
Vue.use(Mint);
Vue.component(Field.name, Field);
Vue.prototype.$axios = axios
Vue.config.productionTip = false

new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})








