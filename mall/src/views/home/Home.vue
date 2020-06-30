<template>
   <div id="home">
     <NavBar class="navbar-color"><div slot="center">购物街</div></NavBar>
    <HomeShop>
      <div  class="box-img" v-for="item in lbt" >
        <a href="#" >
          <img :src="item.img" class="img" >
        </a>
        <div class="desc">
          <h1>商品名称：{{item.sname}}</h1>
          <h1>商品价格：￥{{item.price}}</h1>
        </div>
      </div>
    </HomeShop>
   </div>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar.vue";
  import {getHomelbt} from "../../notwork/home";
  import HomeShop from "../../components/common/shops/HomeShop";

  export default {
       name: "Home",
       data(){
         return{
           lbt:[],
         }
       },
      components:{
         NavBar,
        HomeShop
      },
    created() {
         getHomelbt().then(res=>{
          this.lbt=res.data;
         })
    }
  }
</script>

<style scoped>
  .navbar-color{
    background-color: var(--color-tint);
  }

  .img{
    width: 400px;
    height: 450px;
    margin-left:  30px;
  }

  .box-img{
    float: left;
  }
  .desc{
    margin-left: 30px;
  }
</style>
