// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import MintUI from 'mint-ui'
import { Button, Cell } from 'mint-ui'
Vue.use(MintUI)


Vue.component(Button.name, Button)
Vue.component(Cell.name, Cell)

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
