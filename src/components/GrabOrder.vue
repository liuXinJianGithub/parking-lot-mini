<template>
   <div>
     <mt-header title="抢单"   style="height: 60px; font-size: 18px;height: 60px;cursor: pointer;">
       <div slot="left"  >
         <mt-button icon="back" style="cursor: pointer;"  ></mt-button>
       </div>
     </mt-header>

     <mt-tab-container v-model="selected" >

       <mt-tab-container-item id="grab-order">

           <mt-cell  icon="more"  is-link title="标题" v-for="(item,index) in orders" :key="index"   @click.native.stop="chooseCar(item)"   :class="{isChangeColor: item.remain<=0}" :title=" '   车牌号：' +  item.carNumber"   :label="'  ('+item.startTime+')'"    style="font-weight: bold; border-bottom: 1px solid #eaeaea; padding: 2px 8px;cursor: hand;  padding: 10px;" >
             <img slot="icon" src="../assets/images/grabcar.png" width="24" height="24" style="margin-left: 10px;">
             <span style="color: green"  >抢单</span>
           </mt-cell>

       </mt-tab-container-item>

     </mt-tab-container>
     <div class="bottom-bar">
       <mt-tabbar  >
         <mt-tab-item id="grab-order">
           <img slot="icon" src="../assets/images/grab-order.png" v-if="selected==='grab-order'">
           <img slot="icon" src="../assets/images/grab-order-blue.png" v-else>
           抢单
         </mt-tab-item>
         <mt-tab-item id="car">
           <img slot="icon" src="../assets/images/car.png" v-if="selected!=='car'">
           <img slot="icon" src="../assets/images/car-blue.png" v-else>
           停取
         </mt-tab-item>
         <mt-tab-item id="history">
           <img slot="icon" src="../assets/images/history.png" v-if="selected!=='history'">
           <img slot="icon" src="../assets/images/history-blue.png" v-else>
           历史
         </mt-tab-item>
         <mt-tab-item id="person">
           <img slot="icon" src="../assets/images/person.png" v-if="selected!=='person'">
           <img slot="icon" src="../assets/images/person-blue.png" v-else>
           个人
         </mt-tab-item>
       </mt-tabbar>
     </div>
   </div>
</template>

<script>
  import {mapState} from 'vuex'
  import Header from './Header.vue'
  import TakeOrParkCar from './TakeOrParkCar.vue'
  export default {
     components:{
       Header,TakeOrParkCar
     },
     data(){
       return {
         selected: 'grab-order',
         isShowOrder: true
       }
     },
    mounted(){
      this.$store.dispatch("getAllParkingLotInfo")
      this.$store.dispatch("getAllParkingOrder")
    },
    computed: {
      ...mapState(['itemNum','orders'])
    },
    methods:{
      chooseCar(item){
        this.$router.push({path: `/ParkingLotComponent/${item.id}` })
      },
      returnParkingLot(){
        this.selected = 'grab-order'
      },
      finishOrder(){
        this.$store.dispatch("finishOrderAndUpdateStatu",JSON.parse(localStorage.getItem('token_key') || ' '))
      }
    }
  }
</script>

<style>
  .isChangeColor {
     background: #eaeaea;
     cursor: no-drop;
  }
  body{
    cursor: pointer;
  }

</style>
