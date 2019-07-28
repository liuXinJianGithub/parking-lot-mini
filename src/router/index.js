import Vue from 'vue'
import Router from 'vue-router'
import ListItems from '../components/ListItems.vue'
import ParkingLotComponent from '../components/ParkingLotComponent.vue'

import advice from '../components/advice'
import login from '../components/login'

Vue.use(Router)

export default new Router({
  mode: "history",
  routes: [
    {
      path: '/',
      name: 'parkingLotComponent',
      component: ListItems
    },
    {
      path: '/parkingLotComponent',
      name: 'ParkingLotComponent',
      component: ParkingLotComponent
    },
    {
      path: '/advice',
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

