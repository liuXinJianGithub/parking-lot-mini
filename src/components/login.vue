<template>
  <div>
    <div class="head">
      <mt-button size="large" type="primary" class="logo">logo</mt-button>
    </div>
    <mt-field label="用户名" placeholder="id/电话号码/email" v-model="username"></mt-field>
    <mt-field label="密码" placeholder="请输入密码" type="password" v-model="password"></mt-field>
    <mt-button size="large" type="primary" style="margin:30px 0px" @click="login">登录</mt-button>
  </div>
</template>
<script>
import { Field } from "mint-ui";
export default {
  components: {
    Field
  },
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    login() {
      let user = {
        identity: this.username,
        password: this.password
      }
      console.log(user)
      this.$store.dispatch('login',user);
    }
  }
};
</script>
<style scoped>
.head {
  margin:0 auto;
}
.logo {
  position: relative;
  margin: 80px;
  width: 150px;
  left: 28px;
  height: 150px;
  border-radius: 50%;
  border: none;
  font-size: 50px;
  pointer-events: none;
}
</style>
