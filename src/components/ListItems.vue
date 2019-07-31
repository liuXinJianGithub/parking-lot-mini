<template>
  <div>
    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="grab-order">
        <Header midTitle="抢单" @click.native="returnLogin"/>
        <mt-cell icon="more" is-link title="标题" v-for="(item,index) in orders" :key="index"
                 @click.native.stop="chooseCar(item)" :class="{isChangeColor: item.remain<=0}"
                 :title=" '   车牌号：' +  item.carNumber" :label="'  ('+item.startTime+')'"
                 style="font-weight: bold; border-bottom: 1px solid #eaeaea; padding: 2px 8px;cursor: hand;  padding: 10px;">
          <img slot="icon" src="../assets/images/grabcar.png" width="24" height="24" style="margin-left: 10px;">
          <span style="color: green">抢单</span>
        </mt-cell>

        <mt-cell title="" label=""
                 style="font-weight: bold;   padding: 2px 8px;cursor: hand;   padding: 20px; height: 100px; background: #f7f6fb;">
        </mt-cell>
      </mt-tab-container-item>
      <mt-tab-container-item id="car">
        <div v-if="isShowOrder==='chooseParkingLot'">
          <Header midTitle="停车地点" @click.native="grabOrder"/>
          <mt-cell v-for="(item,index) in itemNum" :key="index" @click.native.stop="chooseParkingLot(item)"
                   :class="{isChangeColor: item.remain<=0}" :title=" item.name+'  ('+item.remain+')'"
                   style="font-weight: bold; border-bottom: 1px solid #eaeaea; padding: 2px 8px;cursor: hand; "/>
        </div>
        <div v-if="isShowOrder==='clickHaveCar'">
          <Header midTitle="停车地点" @click.native="chooseParkingLotReturn"/>
          <mt-cell title="选择停车场" @click.native="returnParkingLot" style="font-weight: bold;"></mt-cell>
          <mt-button type="primary" size="large" @click.native="finishOrder"
                     style="width: 80%;margin: 0 auto;margin-top: 120px;">已停车
          </mt-button>
        </div>
        <div v-if="isShowOrder==='tackCarInfo'">
          <Header midTitle="1111111" @click.native="grabOrder"/>
          111111
        </div>
        <div v-if="isShowOrder==='none'">
          <Header midTitle="取车信息" @click.native="grabOrder"/>
          <ul style="list-style: none;margin:0px;padding:0px;"
              v-infinite-scroll="loadMore"
              infinite-scroll-disabled="loading"
              infinite-scroll-distance="10" v-for="(item,index) in getthecars">
            <mt-actionsheet
              :actions="actions"
              v-model="sheetVisible" :visible.sync="sheetVisible" cancel-text="">
            </mt-actionsheet>
            <li class="cardDiv"  >
              <div class="cardMeg" >
                <p>车牌号:{{item.carNumber}}</p>
                <span class="line"></span>
                <p>还车时间：{{item.startTime}}</p>
                <p>取车地点：{{item.endAddress}}</p>
                <p>还车地点：{{item.startAddress}}</p>
                <mt-button type="primary" :disabled="item.state==='returningthecar'"
                           :class="{takeOrPack:item.state==='returningthecar'}"
                           style="width: 100px;margin-left: 30px; height: 25px;margin-bottom: 20px;"
                           @click="parkOrTakeCar(item.id,'returningthecar')">已取车
                </mt-button>
                <mt-button type="primary" :disabled="item.state!=='returningthecar'"
                           :class="{takeOrPack:item.state!=='returningthecar'}"
                           style="width: 100px;height: 25px;margin-left: 20px;"
                           @click="parkOrTakeCar(item.id,'returnedcar')">已还车
                </mt-button>
              </div>
            </li>
          </ul>
          <div style="height: 60px;"></div>
        </div>
      </mt-tab-container-item>
      <mt-tab-container-item id="history">
        <div v-show="isShowDetailInfo">
          <Header midTitle="历史" @click.native="returnCar"/>
          <mt-cell icon="more" is-link title="标题" v-for="(item,index) in historyOrders" :key="index"
                   @click.native.stop="chooseCarDetailInfo(item,index)" :class="{isChangeColor: item.id<=0}"
                   :title=" '   车牌号：' +  item.carNumber" :label="'  ('+item.startTime+')'"
                   style="font-weight: bold; border-bottom: 1px solid #eaeaea; padding: 2px 8px;cursor: hand;  padding: 10px;">
            <img slot="icon" src="../assets/images/hand.png" width="24" height="24" style="margin-left: 10px;">
            <span style="color: green">详细信息</span>
          </mt-cell>
        </div>
        <div v-show="!isShowDetailInfo">
          <Header midTitle="详细信息" @click.native="returnPre"/>
          <div style=" background: whitesmoke; " v-for="(item,index) in historyOrders" v-if="currentIndex === index">
            <div
              style="width: 90% ; border: 1px solid red;    border-radius: 10px;border: white; margin: 0 auto;background: white;">
              <ul style="list-style: none;padding: 20px;">
                <li>
                  <div style="font-size: 24px;text-align: left;margin-top: 15px;"> 车牌号: {{item.carNumber}}</div>
                  <div style="font-size: 24px;text-align: right;margin-top: -28px;float: right"> Y50.00</div>
                </li>
                <li>订单ID：{{item.id}}</li>
                <li>停车场：{{item.parkingLotId}}</li>
                <li>停车员：{{item.employeeId}}</li>
                <li>状态：{{item.state}}</li>
                <li>开始时间：{{item.startTime}}</li>
                <li>结束时间：{{item.endTime}}</li>
              </ul>
            </div>
          </div>
        </div>
      </mt-tab-container-item>
      <mt-tab-container-item id="person">
        <Header midTitle="个人信息" @click.native="returnHistory"/>
      </mt-tab-container-item>
    </mt-tab-container>
    <div class="bottom-bar">
      <mt-tabbar v-model="selected" fixed>
        <mt-tab-item id="grab-order" @click.native="grabOrderButton">
          <img slot="icon" src="../assets/images/grab-order.png" v-if="selected!=='grab-order'">
          <img slot="icon" src="../assets/images/grab-order-blue.png" v-else>
          抢单
        </mt-tab-item>
        <mt-tab-item id="car" @click.native="carButton">
          <img slot="icon" src="../assets/images/car.png" v-if="selected!=='car'">
          <img slot="icon" src="../assets/images/car-blue.png" v-else>
          停取
        </mt-tab-item>
        <mt-tab-item id="history" @click.native="historyButton">
          <img slot="icon" src="../assets/images/history.png" v-if="selected!=='history'">
          <img slot="icon" src="../assets/images/history-blue.png" v-else>
          历史
        </mt-tab-item>
        <mt-tab-item id="person" @click.native="personButton">
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
  import {Toast, MessageBox, Popup, Indicator, CellSwipe, InfiniteScroll} from 'mint-ui';
  import {Actionsheet} from 'mint-ui';
  export default {
    components: {
      Header, TakeOrParkCar, GrabOrder
    },
    data(){
      return {
        selected: 'grab-order',
        isShowOrder: 'none',
        isShowDetailInfo: true,
        orderId: 0,
        parkingLotId: 0,
        popupVisible: false,
        takeCar: true,
        parkCar: false,
        currentIndex: 0,
        sheetVisible: false,
        id: 0,
        state: '',
        actions: [{
          name: '取消',
          method: this.showToast
        }, {
          name: '确认订单',
          method: this.showMsgbox
        }]
      }
    },
    created(){
    },
    mounted(){
      this.$store.dispatch("getAllParkingLotInfo")
      this.$store.dispatch("getAllParkingOrder")
      this.$store.dispatch("getHistoryOrderByEmployeeId")
      Indicator.open();
      window.setTimeout(() => {
        Indicator.close();
      }, 1000);
    },
    computed: {
      ...mapState(['itemNum', 'orders', 'historyOrders', 'getthecars']),
      employeId: {
        get(){
          return this.$store.state.employeId
        }
      }
    },
    methods: {
      chooseParkingLot(item){
        if (item.remain <= 0) {
          return;
        }
        this.parkingLotId = item.id
        this.isShowOrder = 'clickHaveCar'
        this.selected = 'car'
      },
      finishOrder(){
        this.selected = 'history'
        this.$store.dispatch("updateOrderStateForNobodydo", this.orderId)
        this.$store.dispatch("getAllParkingLotInfo")
        this.$store.dispatch("finishOrderAndUpdateStatu", {orderId: this.orderId, parkingLotId: this.parkingLotId})
        this.isShowOrder = 'none'
      },
      chooseCarDetailInfo(item, index){
        MessageBox.confirm('查看详情?').then(action => {
          this.isShowDetailInfo = !this.isShowDetailInfo
          this.currentIndex = index
        }).catch(err => {});
      },
      chooseCar(item){
        this.orderId = item.id
        this.selected = 'car'
        this.isShowOrder = 'chooseParkingLot'
        Indicator.open({
          text: '加载中...',
          spinnerType: 'fading-circle'
        });
        window.setTimeout(() => {
          Indicator.close();
        }, 120);
      },
      returnParkingLot(){
        this.selected = 'car'
        this.isShowOrder = 'chooseParkingLot'
      },
      returnHistory(){
        this.selected = 'history'
      },
      historyButton(){
        this.isShowOrder = 'none'
        this.isShowDetailInfo = true
        this.$store.dispatch("getHistoryOrderByEmployeeId")

      },
      grabOrderButton(){
        this.isShowOrder = 'none'
        this.$store.dispatch("getAllParkingOrder")
      },
      carButton  (){
        this.$store.dispatch("getOrderByGetTheCar")
      },
      personButton(){
        this.isShowOrder = 'none'
      },
      returnPre(){
        this.isShowDetailInfo = true
      },
      returnCar(){
        this.selected = 'car'
      },
      grabOrder(){
        this.selected = 'grab-order'
        this.$store.dispatch("updateOrderStateForNobodydo", this.orderId)
      },
      loadMore(){
        this.$store.dispatch("getOrderByGetTheCar")
        Indicator.open()
        window.setTimeout(() => {
          Indicator.close()
        }, 300)
      },
      parkOrTakeCar(id, state){
        this.sheetVisible = true
        this.id = id
        this.state = state
      },
      showToast() {
        Toast('已取消');
      },
      showMsgbox() {
        MessageBox('提示', '操作成功');
        this.$store.dispatch("parkOrTakeCar", {id: this.id, state: this.state})
      },
      returnLogin(){
        this.$router.go(-1)
      },
      chooseParkingLotReturn(){
        this.selected = 'car'
        this.isShowOrder = 'chooseParkingLot'
      }
    }
  }
</script>

<style>
  .isChangeColor {
    background: #eaeaea;
    cursor: no-drop;
  }

  body {
    cursor: pointer;
    background: #f7f6fb;
  }

  ul li {
    padding: 10px;
  }

  .icon-success {
  }

  .cardDiv {
    width: 83%;
    height: 230px;
    background: white;
    border-radius: 5px;
    margin: 15px auto;
  }

  .cardDiv p {
    margin: 14px;
  }

  .line {
    display: block;
    width: 100%;
    background-color: #f7f6fb;
    height: 3px;
  }

  .cardMeg {
    width: 90%;
    height: 100%;
    margin: 0 auto;
    color: #8b898a;
    font-size: 16px;
  }

  .takeOrPack {
    background: #a9acb1;
    cursor: no-drop;
  }
</style>
