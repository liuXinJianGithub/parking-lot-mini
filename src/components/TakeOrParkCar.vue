<template>
  <div >
     <mt-cell title="选择停车场"  @click.native="returnParkingLot" style="font-weight: bold;"></mt-cell>
     <mt-button type="primary" size="large"    style="width: 80%;margin: 0 auto;margin-top: 120px;">完成订单</mt-button>
  </div>
</template>

<script>
  export default {
    props:['selected'],
    data(){
      return {
      }
    },
    methods:{
        returnParkingLot(){
//          this.$router.go(-1)
//          this.$router.push('ParkingLotComponent')
          this.selected = 'car'
        },

    }
  }
</script>

<style>
  body{
    cursor: pointer;
  }
</style>
