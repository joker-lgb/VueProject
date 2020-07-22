<template>
   <div id="home">
     <NavBar class="navbar-color"><div slot="center">购物街</div></NavBar>
      <Swiper>
        <SwiperItem v-for="(item,index) in lbt">
         <div @click="lbtclick(index)">
           <img :src="item.img" class="lbt_img">
         </div>
        </SwiperItem>
      </Swiper>

    <HomeList :shopList="shops"  v-on:pageclick="pageclick"></HomeList>
   </div>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar.vue";
  import {getshops} from "../../notwork/home";
  import HomeList from "../../components/common/shops/ShopList";
  import {querylbt} from "../../notwork/home";


  import Swiper from "components/common/swiper/Swiper";
  import SwiperItem from "../../components/common/swiper/SwiperItem";

  export default {
       name: "Home",
       data(){
         return{
           shops:[],
           lbt:[],
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
         getshops().then(res=>{
           this.shops=res.data;
         })
       querylbt().then(res=>{
        this.lbt=res.data

      })

    },methods:{
         lbtclick:function (index) {
           this.$router.push({
             path:'/details',
             query:{
               sid:this.lbt[index].sid
             }
           })
         },pageclick:function (data) {
           this.shops=data
      }
    },
  }
</script>

<style scoped>
  .navbar-color{
    background-color: var(--color-tint);
  }

  .lbt_img{
    cursor: pointer;
  }


</style>
