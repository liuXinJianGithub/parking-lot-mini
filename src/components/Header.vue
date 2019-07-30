<template>
  <mt-header :title="midTitle"   style="height: 60px; font-size: 18px;height: 60px;cursor: pointer;">
    <div slot="left"  >
      <mt-button icon="back" style="cursor: pointer;" @click="handleClose"></mt-button>
    </div>
  </mt-header>
</template>

<script>
  export default {
    props:['midTitle'],
    methods:{
      handleClose(){
      }
    }
  }
</script>

<style>
  body{
    margin: 0;
    padding: 0;
  }
</style>
