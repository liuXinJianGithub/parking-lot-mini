import Vue from 'vue'
import Router from 'vue-router'
import advice from '../components/advice'
import login from '../components/login'

Vue.use(Router)

export default new Router({
  mode: "history",
  routes: [
    {
      path: '/',
      name: 'advice',
      component: advice
    },
    {
      path: '/login',
      name: 'login',
      component: login
    }
  ]
})
