export default {
//
//   add(state, {todo}){
//     state.bakTodos.unshift(todo)
//     state.todos = state.bakTodos
//   },
  getAllParkingLotInfo(state, itemNum){
    state.itemNum = itemNum.itemNum
  }
//   del(state, index){
//     var todoIndex = state.bakTodos.indexOf(state.todos[index.index])
//     state.bakTodos.splice(todoIndex, 1)
//     state.todos = state.bakTodos
//   },
//   chooseShowStraegy(state, straegy){
//     state.todos = state.bakTodos
//     if (straegy.option === 'active') {
//       state.todos = state.bakTodos.filter(todo => !todo.complete)
//     } else if (straegy.option === 'complete') {
//       state.todos = state.bakTodos.filter(todo => todo.complete)
//     }
//   },
//   synchronzedState(state, response){
//     state.bakTodos = response.response
//     state.todos = response.response
//   }
}
