import axios from 'axios'
import { Toast } from 'mint-ui';
export default {
  getAllParkingLotInfo({commit}){
    axios.get(`http://39.98.242.177:8888/parking-lots`)
      .then((response) => {
        var itemNum = response.data;
        commit("getAllParkingLotInfo", {itemNum})
      }).catch((error) => {
    });
  },
  getAllParkingOrder({commit}){
    var state = 'nobodydo'
    axios.get('http://39.98.242.177:8888/grab-order?state='+state)
      .then((response) => {
        var orders = response.data;
        commit("getAllParkingOrder", {orders})
      }).catch((error) => {
    });
  },
  getHistoryOrderByEmployeeId({state,commit}){
    let employeeId = JSON.parse(localStorage.getItem('token_key') || ' ')
    axios.get('http://39.98.242.177:8888/login/order?employeeId='+ employeeId )
      .then((response) => {
        state.historyOrders = response.data;
        var historyOrders = response.data;
        commit("getHistoryOrderByEmployeeId", {historyOrders})
      }).catch((error) => {
    });
  },
  login({commit}, userLogin) {
    if(!userLogin.name.trim() || !userLogin.password.trim()){
      Toast({
        message: '账号和密码不能为空',
        iconClass: 'icon icon-success'
      });
      return;
    }
    axios.post(`http://39.98.242.177:8888/login`,userLogin)
      .then((response) => {
        if(response.data.code === 100){
          localStorage.setItem('token_key', JSON.stringify(response.data.extend.token))
          var tokens = JSON.parse(localStorage.getItem('token_key') || '[]')
          if(response.data.extend.token === tokens){
            Toast({
              message: response.data.extend.message,
              iconClass: 'icon icon-success'
            });
          }else{
            Toast({
              message: '请不要重复登录',
              iconClass: 'icon icon-success'
            });
          }
          var employeId = response.data.extend.employeId
          commit("login", {'tokens':tokens,'employeId':employeId})
         window.location.href = '/ListItems'
        }else{
          if(response.data.extend.message === 'has logged in '){
            Toast({
              message: '已登录',
              iconClass: 'icon icon-success'
            });
            window.location.href = '/parkingLotComponent'
          }else{
            Toast({
              message: '请输入正确的账号和密码',
              iconClass: 'icon icon-success'
            });
          }
        }
      }).catch((error) => {
    });
  },
  finishOrderAndUpdateStatu({state,commit }, item){
    var stateMsg = 'alreadystopped'
    let orderId = item.orderId
    let parkingLotId = item.parkingLotId
    axios.put(`http://39.98.242.177:8888/login/order/${orderId}?stateMsg=${stateMsg}&parkingLotId=${parkingLotId}`)
      .then((response) => {
        state.orders = response.data
      }).catch((error) => {
    });
  },
  grabOderThenUpdateState({state,commit},item){
    var stateMsg = "haveorder"
    var id = item.id
    var token = JSON.parse(localStorage.getItem('token_key') || ' ')
    axios.put(`http://39.98.242.177:8888/login/order/${id}?stateMsg=${stateMsg}&token=${token}`)
      .then((response) => {
        state.orders = response.data
      }).catch((error) => {
    });
  },
  getOrderByGetTheCar({commit}){
    var token = JSON.parse(localStorage.getItem('token_key') || ' ')
    axios.get(`http://39.98.242.177:8888/login/order?&token=${token}`)
      .then((response) => {
        let getthecars = response.data
        commit("getOrderByGetTheCar",{getthecars})
      }).catch((error) => {
    });
  },
  parkOrTakeCar({commit},item){
    var id = item.id
    var state = item.state
    var token = JSON.parse(localStorage.getItem('token_key') || ' ')
    axios.put(`http://39.98.242.177:8888/login/order/${id}?state=${state}&token=${token}`)
      .then((response) => {
        let getthecars = response.data
        commit("parkOrTakeCar",{getthecars})
      }).catch((error) => {
    });
  },
  getParkingLotNameAndEmployeeName({commit},item){
  }
}
