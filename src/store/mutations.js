export default {
  getAllParkingLotInfo(state, itemNum){
    state.itemNum = itemNum.itemNum
  },
  getAllParkingOrder(state, orders){
    state.orders = orders.orders
  },
  getHistoryOrderByEmployeeId(state,historyOrders){
    state.historyOrders = orders.historyOrders
  },
  login(state, tokens){
    state.tokes = tokens.tokens
    state.employeId = tokens.employeId
  },
  getOrderByGetTheCar(state, getthecars){
    state.getthecars = getthecars.getthecars
  },
  parkOrTakeCar(state,getthecars){
    state.getthecars = getthecars.getthecars
  }
}
