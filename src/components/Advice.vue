<template>
  <div style="cursor: pointer;">
      <mt-header fixed title="欢迎来到停车宝" style="width: 100%;margin: 0 auto;border-radius: 4px;"></mt-header>
    <div style=" height:300px; margin: 50px 0px;  " >
      <mt-swipe :show-indicators="false" class="showImage">
        <mt-swipe-item><img src="../assets/jobs1.jpg"  ></mt-swipe-item>
        <mt-swipe-item><img src="../assets/jobs2.jpg"></mt-swipe-item>
        <mt-swipe-item><img src="../assets/jobs3.jpg"></mt-swipe-item>
      </mt-swipe>
      <br>
      <mt-button size="large" type="primary" style="margin:30px 0px;cursor: pointer;" @click="goLogin">前往登录</mt-button>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return {
      speed: '150'
    }
  },
  methods: {
    goLogin() {
      this.$router.push({ path: "/login" });
    }
  }
};
</script>
<style scoped>

.showImage img{
  margin: 0 auto;
  height: 300px;
  width: 95%;
  margin-left: 10px;
  margin-top: 20px;
}

</style>
