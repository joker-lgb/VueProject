<template>
    <div @click="shopclick" class="box-img">
      <img :src="shopitem.img" class="img">
    </div>
</template>

<script>

    export default {
        name: "Shopitem",
        props:{
          shopitem:{
            type:Object,
          }
        },methods:{
          shopclick:function () {
           this.$router.push({
             path:'/details',
             query:{
               sid:this.shopitem.sid,
             }
           })
          }
      }
    }
</script>

<style scoped>
  .img{
    width: 400px;
    height: 450px;
    margin-left:  30px;
  }
  .box-img{
    float: left;
  }

</style>
