export default {
  getAllParkingLotInfo(state, itemNum){
    state.itemNum = itemNum.itemNum
  },
  getAllParkingOrder(state, orders){
    state.orders = orders.orders
  },
  login(state, tokens){
    state.tokes = tokens.tokens
  }
}
