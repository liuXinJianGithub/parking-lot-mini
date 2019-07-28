import Vue from 'vue'
import Router from 'vue-router'
import ParkingLotComponent from '../components/ParkingLotComponent.vue'
import Advice from '../components/Advice.vue'
import Login from '../components/Login.vue'
import GrabOrder from '../components/GrabOrder.vue'
import FinshOrder from '../components/FinshOrder.vue'

Vue.use(Router)

export default new Router({
  mode: "history",
  routes: [
    {
      path: '/parkingLotComponent/:carId',
      name: 'ParkingLotComponent',
      component: ParkingLotComponent
    },
    {
      path: '/',
      name: 'Advice',
      component: Advice
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/grabOrder',
      name: 'GrabOrder',
      component: GrabOrder
    },
    {
      path: '/finshOrder',
      name: 'FinshOrder',
      component: FinshOrder
    }
  ]
})

