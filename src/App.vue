<template>
  <div>

    <!-- <login></login> -->
    <!-- <advice></advice>
    <mt-button size="large" type="primary" style="margin:30px 0px" @click="goLogin">前往登录</mt-button> -->
    <router-view></router-view>
  </div>
</template>

<script>
import login from './components/login'
import advice from './components/advice'
export default {
  components: {
    login,
    advice
  },
  methods:{
    goLogin(){
      this.$router.push({ path: "/login" });
    }
  }
};
</script>
<style scoped>
</style>

