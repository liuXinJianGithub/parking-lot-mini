<template>
  <div>
    <div class="head" style="height: 290px ; width: 265px; border: none; ">
      <img src="../assets/images/logo.png" style="width: 180px;height: 180px;background: white;  margin: 40px auto 7px 45px;">
    </div>
    <mt-field style="margin-left: 10px;" label="用户名" placeholder=" Id / 电话号码 / Email" v-model="name"></mt-field>
    <mt-field style="margin-left: 10px;" label=" 密码" placeholder=" 请输入密码" type="password" v-model="password"></mt-field>
    <mt-button size="large" type="primary" style="margin: 50px auto; width: 80%;" @click="login">登录</mt-button>
  </div>
</template>
<script>
  import {mapState} from 'vuex'
  export default {
    data() {
      return {
        name: "",
        password: "",
        isSuccessLogIn: false,
        sessionId: ''
      };
    },
    created(){
      this.$store.dispatch('getHistoryOrderByEmployeeId');
    },
    computed: {
      ...mapState(['token'])
    },
    methods: {
      login() {
        let user = {
          name: this.name,
          password: this.password
        }
        this.$store.dispatch('login', user);
      }
    },
    watch: {
      token: {
        deep: true,
        handler () {
        }
      }
    }
  };
</script>
<style scoped>
  .head {
    margin: 0 auto;
  }
</style>
