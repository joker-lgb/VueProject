<template>
   <div id="home">
     <NavBar class="navbar-color"><div slot="center">购物街</div></NavBar>
      <Swiper>
        <SwiperItem v-for="(item,index) in shops">
         <div @click="lbtclick(index)">
           <img :src="item.img" >
         </div>
        </SwiperItem>


      </Swiper>

    <HomeList :shopList="shops"></HomeList>
   </div>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar.vue";
  import {getHomelbt} from "../../notwork/home";
  import HomeList from "../../components/common/shops/ShopList";

  import Swiper from "components/common/swiper/Swiper";
  import SwiperItem from "../../components/common/swiper/SwiperItem";

  export default {
       name: "Home",
       data(){
         return{
           shops:[],
           sid:null,
         }
       },
      components:{
         HomeList,
         NavBar,
         Swiper,
         SwiperItem
      },
    created() {
         getHomelbt().then(res=>{
          this.shops=res.data;
         })
    },methods:{
         lbtclick:function (index) {
           this.$router.push({
             path:'/details',
             query:{
               sid:this.shops[index].sid
             }
           })
         }
    }
  }
</script>

<style scoped>
  .navbar-color{
    background-color: var(--color-tint);
  }


</style>
