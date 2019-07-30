import axios from 'axios'
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
    axios.get('http://39.98.242.177:8888/login/order?employeeId='+JSON.parse(localStorage.getItem('token_key') || ' '))
      .then((response) => {
        state.historyOrders = response.data;
        var historyOrders = response.data;
        commit("getHistoryOrderByEmployeeId", {historyOrders})
      }).catch((error) => {
    });
  },
  login({commit}, userLogin) {
    axios.post(`http://39.98.242.177:8888/login`,userLogin)
      .then((response) => {
        if(response.data.code === 100){
          localStorage.setItem('token_key', JSON.stringify(response.data.extend.token))
          var tokens = JSON.parse(localStorage.getItem('token_key') || '[]')
          if(response.data.extend.token === tokens){
            alert(response.data.extend.message)
          }else{
            alert("请不要重复登录")
          }
          var employeId = response.data.extend.employeId
          commit("login", {'tokens':tokens,'employeId':employeId})
          window.location.href = '/ListItems'
        }else{
          alert(response.data.extend.message)
          if(response.data.extend.message === 'has logged in '){
            window.location.href = '/parkingLotComponent'
          }else{
            window.location.href = '/login'
          }
        }
      }).catch((error) => {
    });
  },
  finishOrderAndUpdateStatu({state,commit }, orderId){
    var stateMsg = 'alreadystopped'
    axios.put(`http://39.98.242.177:8888/login/order/${orderId}?stateMsg=${stateMsg}`)
      .then((response) => {
        state.orders = response.data
        // window.location.href = '/ListItems'
      }).catch((error) => {
    });
  },
  grabOderThenUpdateState({state,commit},id){
    // var token = JSON.parse(localStorage.getItem('token_key') || ' ')
    var stateMsg = "haveorder"
    var token = JSON.parse(localStorage.getItem('token_key') || ' ')
    axios.put(`http://39.98.242.177:8888/login/order/${id}?stateMsg=${stateMsg}&token=${token}`)
      .then((response) => {
        state.orders = response.data
        // window.location.href = '/finshOrder'
      }).catch((error) => {
    });
  }
}
