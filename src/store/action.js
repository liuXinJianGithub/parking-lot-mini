import axios from 'axios'
export default {
  login({ commit }, pakage) {
    console.log(pakage)
    axios.post('http://localhost:9090/login', {
      'identity': pakage.identity,
      'password': pakage.password,
    })
      .then(function (response) {
        alert("success")
      })
      .catch(function (error) {
        if (error.response.status === 400) {
          alert("账号或者密码错误")
        }
      });
  }
  // getNoOrderPakage({ commit }) {
  //   let destination = "http://localhost:8849/pakages?status=0"
  //   axios.get(destination).then((response) => {
  //     var items = response.data
  //     commit("getNoOrderPakage", items)
  //   })
  // },
}
