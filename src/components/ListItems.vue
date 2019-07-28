<template>
   <div>
     <Header/>
     <mt-tab-container v-model="selected" >
       <mt-tab-container-item id="grab-order">
           <mt-cell v-for="(item,index) in itemNum" :key="index"   @click.native.stop="chooseParkingLot(item)"   :class="{isChangeColor: item.remain<=0}" :title=" item.name+'  ('+item.remain+')'"  style="font-weight: bold; border-bottom: 1px solid #eaeaea; padding: 2px 8px;cursor: hand; "  />
       </mt-tab-container-item>

       <mt-tab-container-item id="car">
       </mt-tab-container-item>

       <mt-tab-container-item id="history">
       </mt-tab-container-item>

       <mt-tab-container-item id="person">
       </mt-tab-container-item>

     </mt-tab-container>

     <div class="bottom-bar">
       <mt-tabbar v-model="selected">
         <mt-tab-item id="grab-order">
           <img slot="icon" src="../asserts/images/grab-order.png" v-if="selected!=='grab-order'">
           <img slot="icon" src="../asserts/images/grab-order-blue.png" v-else>
           抢单
         </mt-tab-item>
         <mt-tab-item id="car">
           <img slot="icon" src="../asserts/images/car.png" v-if="selected!=='car'">
           <img slot="icon" src="../asserts/images/car-blue.png" v-else>
           停取
         </mt-tab-item>
         <mt-tab-item id="history">
           <img slot="icon" src="../asserts/images/history.png" v-if="selected!=='history'">
           <img slot="icon" src="../asserts/images/history-blue.png" v-else>
           历史
         </mt-tab-item>
         <mt-tab-item id="person">
           <img slot="icon" src="../asserts/images/person.png" v-if="selected!=='person'">
           <img slot="icon" src="../asserts/images/person-blue.png" v-else>
           个人
         </mt-tab-item>
       </mt-tabbar>
     </div>
   </div>
</template>

<script>
  import {mapState} from 'vuex'
  import Header from './Header.vue'
  export default {
     components:{
       Header
     },
     data(){
       return {
         selected: 'grab-order',
         isShowOrder: true
       }
     },
    mounted(){
      this.$store.dispatch("getAllParkingLotInfo")
    },
    computed: {
      ...mapState(['itemNum'])
    },
    methods:{
      chooseParkingLot(item){
        if(item.remain <= 0){
          return;
        }
        this.$router.push("/")
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
