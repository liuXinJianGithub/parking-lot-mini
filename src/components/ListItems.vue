<template>
   <div>














     <mt-tab-container v-model="selected" >

           <mt-tab-container-item id="grab-order">
               <Header  midTitle="抢单"  />
               <mt-cell  icon="more"  is-link title="标题" v-for="(item,index) in orders" :key="index"   @click.native.stop="chooseCar(item)"   :class="{isChangeColor: item.remain<=0}" :title=" '   车牌号：' +  item.carNumber"   :label="'  ('+item.startTime+')'"    style="font-weight: bold; border-bottom: 1px solid #eaeaea; padding: 2px 8px;cursor: hand;  padding: 10px;" >
                 <img slot="icon" src="../assets/images/grabcar.png" width="24" height="24" style="margin-left: 10px;">
                 <span style="color: green"  >抢单</span>
               </mt-cell>
         </mt-tab-container-item>


       <mt-tab-container-item id="car">
             <div v-show="isShowOrder">
                 <Header  midTitle="停车地点"  />
                 <mt-cell v-for="(item,index) in itemNum" :key="index"   @click.native.stop="chooseParkingLot(item)"   :class="{isChangeColor: item.remain<=0}" :title=" item.name+'  ('+item.remain+')'"  style="font-weight: bold; border-bottom: 1px solid #eaeaea; padding: 2px 8px;cursor: hand; "  />
             </div>
             <div v-show="!isShowOrder">
                 <Header  midTitle="停车地点"  />
                 <mt-cell title="选择停车场"  @click.native="returnParkingLot" style="font-weight: bold;"></mt-cell>
                 <mt-button type="primary" size="large" @click.native="finishOrder"   style="width: 80%;margin: 0 auto;margin-top: 120px;">已停车</mt-button>
             </div>
       </mt-tab-container-item>


       <mt-tab-container-item id="history" >
         <div v-show="isShowDetailInfo">
               <Header  midTitle="历史"  />
               <mt-cell  icon="more"  is-link title="标题" v-for="(item,index) in historyOrders" :key="index"   @click.native.stop="chooseCarDetailInfo(item)"   :class="{isChangeColor: item.id<=0}" :title=" '   车牌号：' +  item.carNumber"   :label="'  ('+item.startTime+')'"    style="font-weight: bold; border-bottom: 1px solid #eaeaea; padding: 2px 8px;cursor: hand;  padding: 10px;" >
                 <img slot="icon" src="../assets/images/hand.png"  width="24" height="24" style="margin-left: 10px;">
                 <span style="color: green" >详细信息</span>
               </mt-cell>
         </div>
         <div v-show="!isShowDetailInfo">
               <Header  midTitle="详细信息"  />
           <div style=" background: whitesmoke;  ">

               <div style="width: 90% ; border: 1px solid red;  border-radius: 10px;border: white; margin: 0 auto;background: white;">
                   <ul style="list-style: none;padding: 20px;">
                     <li>
                       <div style="font-size: 24px;text-align: left;margin-top: 15px;"> 车牌号</div>
                       <div style="font-size: 24px;text-align: right;margin-top: -30px;float: right"> Y50.00</div>
                     </li>
                     <li>订单ID：1</li>
                     <li>停车场：停车场A</li>
                     <li>停车员：停车员A</li>
                     <li>状态：已完成</li>
                     <li>开始时间：16:00</li>
                     <li>结束时间：17:20</li>
                   </ul>
               </div>
           </div>
         </div>

       </mt-tab-container-item>




       <mt-tab-container-item id="person">
       </mt-tab-container-item>

     </mt-tab-container>

     <div class="bottom-bar">
         <mt-tabbar v-model="selected">

                       <mt-tab-item id="grab-order">
                           <img slot="icon" src="../assets/images/grab-order.png" v-if="selected!=='grab-order'">
                           <img slot="icon" src="../assets/images/grab-order-blue.png" v-else>
                                   抢单
                       </mt-tab-item>


                       <mt-tab-item id="car">
                           <img slot="icon" src="../assets/images/car.png" v-if="selected!=='car'">
                           <img slot="icon" src="../assets/images/car-blue.png" v-else>
                                   停取
                       </mt-tab-item>

                       <mt-tab-item id="history" @click.native="chooseHistory">
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
   </div>
</template>

<script>
  import {mapState} from 'vuex'
  import Header from './Header.vue'
  import TakeOrParkCar from './TakeOrParkCar.vue'
  import GrabOrder from './GrabOrder.vue'
  export default {
     components:{
       Header,TakeOrParkCar,GrabOrder
     },
     data(){
       return {
         selected: 'grab-order',
         isShowOrder: true,
         isShowDetailInfo: true,
         orderId: 0,
         parkingLotId: 0
       }
     },
    mounted(){
      this.$store.dispatch("getAllParkingLotInfo")
      this.$store.dispatch("getAllParkingOrder")
      this.$store.dispatch("getHistoryOrderByEmployeeId")
    },
    computed: {
      ...mapState(['itemNum','orders','historyOrders']),
      employeId:{
        get(){
          return this.$store.state.employeId
        }
      }
    },
    methods:{
      chooseParkingLot(item){
        if(item.remain <= 0){
          return;
        }
        this.parkingLotId = item.id
        this.isShowOrder = !this.isShowOrder
        this.selected = 'car'
      },
      finishOrder(){
        this.selected = 'history'
        this.$store.dispatch("finishOrderAndUpdateStatu",this.orderId)
      },
      chooseCarDetailInfo(item){
        this.isShowDetailInfo = !this.isShowDetailInfo
      },
      chooseCar(item){
        this.orderId = item.id
        this.selected = 'car'
        this.isShowOrder = true
        this.$store.dispatch("grabOderThenUpdateState",item.id)  //JSON.parse(localStorage.getItem('token_key') || ' ')
      },
      returnParkingLot(){
        this.selected = 'grab-order'
      },
      chooseHistory(){
        this.isShowDetailInfo=true

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
  ul li{
    padding: 10px;
  }
</style>
