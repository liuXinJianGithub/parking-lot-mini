import axios from 'axios'
export default {
  getAllParkingLotInfo({commit}){
    axios.get(`http://localhost:9090/parking-lots`)
      .then((response) => {
        var itemNum = response.data;
        commit("getAllParkingLotInfo", {itemNum})
      }).catch((error) => {
    });
  },
  getAllParkingOrder({commit}){
    axios.get(`http://localhost:9090/grab-order`)
      .then((response) => {
        var orders = response.data;
        commit("getAllParkingOrder", {orders})
      }).catch((error) => {
    });
  },
  login({commit }, userLogin) {
    axios.post(`http://localhost:9090/login`,userLogin)
      .then((response) => {
        if(response.data.code === 100){
            localStorage.setItem('token_key', JSON.stringify(response.data.extend.token))
            var tokens = JSON.parse(localStorage.getItem('token_key') || '[]')
            alert(response.data.extend.message)
            window.location.href = '/grabOrder'
           commit("login", {tokens})
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
  finishOrderAndUpdateStatu({commit }, token){
    axios.put(`http://localhost:9090/login?token=${token}`)
      .then((response) => {
        window.location.href = '/finshOrder'
      }).catch((error) => {
    });
  }
}
