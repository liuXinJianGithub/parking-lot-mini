import Vue from 'vue'
import App from './App'
import router from './router'


import store from './store'
import Mint from 'mint-ui';
// import 'mint-ui/lib/style.css'
import './asserts/style.css'


import router from './router/index'
import axios from 'axios'
import store from './store/store'



Vue.prototype.$axios = axios

Vue.use(Mint);

Vue.config.productionTip = false

new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})

