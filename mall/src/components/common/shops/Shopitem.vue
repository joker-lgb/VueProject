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
    margin-top: 10px;
    cursor: pointer;
  }
  .box-img{
    display: inline;
    position: relative;
    left: 120px;
  }

  .img:hover{
    border: #5c6b77 solid 2px;
    box-shadow:-2px 0 3px hotpink;
  }


</style>
