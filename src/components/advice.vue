<template>
  <div>
      <mt-header fixed title="欢迎来到停车宝"></mt-header>
    <div style="height:200px;margin:50px 0px">
      <mt-swipe :show-indicators="false" speed="150">
        <mt-swipe-item><img src="https://tse2-mm.cn.bing.net/th?id=OIP.qOnWgspE63v0_LOvFyiESgHaFB&w=299&h=201&c=7&o=5&pid=1.7"></mt-swipe-item>
        <mt-swipe-item><img src="https://tse1-mm.cn.bing.net/th?id=OIP.KuwKSJZocoEmNj-IOoQHOwHaFF&w=282&h=194&c=7&o=5&pid=1.7"></mt-swipe-item>
        <mt-swipe-item><img src="https://tse3-mm.cn.bing.net/th?id=OIP.dV4wjI-2xShabGR-_VSQ0QHaGK&w=242&h=202&c=7&o=5&pid=1.7"></mt-swipe-item>
      </mt-swipe>
      <br>
       <mt-swipe :show-indicators="false" speed="150">
        <mt-swipe-item><img src="https://tse2-mm.cn.bing.net/th?id=OIP.qOnWgspE63v0_LOvFyiESgHaFB&w=299&h=201&c=7&o=5&pid=1.7"></mt-swipe-item>
        <mt-swipe-item><img src="https://tse1-mm.cn.bing.net/th?id=OIP.KuwKSJZocoEmNj-IOoQHOwHaFF&w=282&h=194&c=7&o=5&pid=1.7"></mt-swipe-item>
        <mt-swipe-item><img src="https://tse3-mm.cn.bing.net/th?id=OIP.dV4wjI-2xShabGR-_VSQ0QHaGK&w=242&h=202&c=7&o=5&pid=1.7"></mt-swipe-item>
      </mt-swipe>
      <mt-button size="large" type="primary" style="margin:30px 0px" @click="goLogin">前往登录</mt-button>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    goLogin() {
      this.$router.push({ path: "/login" });
    }
  }
};
</script>
<style scoped>
img{
    margin: 0px 0px;
    height: 200px;
    width: 400px;
}
</style>
