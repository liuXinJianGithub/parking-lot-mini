<template>

  <div>
    <ListItems/>
  </div>

</template>

<script>
  import ListItems from './ListItems.vue'
  export default {
     props:['carId'],
     components:{
        ListItems
     }
  }
</script>
