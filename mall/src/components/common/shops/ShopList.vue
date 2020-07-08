<template>
    <div>
       <Shopitem v-for="item in shopList" :shopitem="item">
       </Shopitem>
    </div>
</template>

<script>
    import Shopitem from "./Shopitem";
    export default {
        name: "HomeList",
        props:{
           shopList:{
             type:Array,
           }
        },components:{
          Shopitem,
      }
    }
</script>

<style scoped>


  .desc{
    margin-left: 30px;
  }

</style>
