<template>
  <div>
    <div class="head">
      <mt-button size="large" type="primary" class="logo" >logo</mt-button>
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
          this.$store.dispatch('login',user);
        }
      },
    watch: {
      token: {
        deep: true,
        handler () {
          alert(2);
        }
      }
    }

  };
</script>
<style scoped>
.head {
  margin:0 auto;
}
.logo {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  border: none;
  font-size: 50px;
  pointer-events: none;
  margin: 0 auto;
  margin-bottom: 70px;
  margin-top: 50px;
}
</style>
