import Vue from 'vue'
import Router from 'vue-router'
import ListItems from '../components/ListItems.vue'
import ParkingLotComponent from '../components/ParkingLotComponent.vue'

Vue.use(Router)

export default new Router({
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
    }
  ]
})
