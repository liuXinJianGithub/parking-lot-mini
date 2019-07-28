import axios from 'axios'
export default {
//   add ({commit, state}, todo) {
//     commit("add", {todo})
//   },
//   del ({commit}, index) {
//     commit("del", {index})
//
//   },
//   chooseShowStraegy ({commit}, option) {
//     commit("chooseShowStraegy", {option})
//   },
  getAllParkingLotInfo({commit}){
    axios.get(`http://localhost:9090/parking-lots`)
      .then((response) => {
        var itemNum = response.data;
        commit("getAllParkingLotInfo", {itemNum})
      }).catch((error) => {
    });
  }
//   updateTodoListToBackend({commit, state}){
//     axios.post(`http://localhost:9090/todo-lists`, JSON.parse(state.bakTodos))
//       .then(function (response) {
//         console.log(response.data)
//       })
//       .catch(function (error) {
//         console.log(error);
//       });
//   },
//
//   addTodoListToBackend({commit, state}){
//     axios.post(`http://localhost:9090/todo-lists`, state.bakTodos)
//       .then(function (response) {
//         console.log(response.data)
//         var response = response.data
//         commit("synchronzedState", {response})
//       })
//       .catch(function (error) {
//         console.log(error);
//       });
//   },
//   deleteTodoListFromBackend({commit, state}, index){
//
//     axios.delete(`http://localhost:9090/todo-lists/${index}`)
//       .then(function (response) {
//         var response = response.data
//         commit("synchronzedState", {response})
//       })
//       .catch(function (error) {
//         console.log(error);
//       });
//   },
//   synchronzedEdit({commit, state}, index){
//     axios.post(`http://localhost:9090/todo-lists`, state.bakTodos)
//       .then(function (response) {
//         console.log(response.data)
//         var response = response.data
//         commit("synchronzedState", {response})
//       })
//       .catch(function (error) {
//         console.log(error.data);
//       });
//   }
}
