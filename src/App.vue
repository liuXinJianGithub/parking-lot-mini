<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>

  export default {
    name: 'app'
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
};
</script>
<style scoped>
</style>

