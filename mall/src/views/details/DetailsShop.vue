<template>

    <div v-if="details!=null">
      <NavBar class="navbar-color" ><div slot="center">商品详情</div></NavBar>
      <img :src="details.img" class="img">
         <div class="shopitem" v-if="$store.state.loginstate">
           <h3>商品名称:{{details.sname}}</h3>
           <h3>商品价格:{{details.price*count}}</h3>
           <h3>商品描述:{{details.desc}}</h3>
           <h3>商品数量:</h3><button class="count" @click="increment">+</button>
           <input type="text"  v-model="count">
           <button class="count" @click="decrement">-</button><br>
           <button class="btn" @click="addcard">加入购物车</button>
         </div>
      <div class="shopitem"  v-else>
        <h3>商品名称:{{details.sname}}</h3>
        <h3>商品价格:{{details.price*count}}</h3>
        <h3>商品描述:{{details.desc}}</h3>
        <h3>商品数量:</h3><button class="count" @click="increment">+</button>
        <input type="text"  v-model="count">
        <button class="count" @click="decrement">-</button><br>
        <button class="btn" @click="addcard1">加入购物车</button>
      </div>
    </div>
  <div v-else>商品为空</div>
</template>

<script>
  import {getshopitem} from "../../notwork/details";
  import NavBar from "components/common/navbar/NavBar.vue";
  import {card} from "../../notwork/home";

  export default {
        name: "DetailsShop",
        data(){
          return {
            details:null,
            sid:null,
            count:1,
          }
        },created() {
        this.sid=this.$route.query.sid;
        getshopitem(this.sid).then(res=>{
           this.details=res.data;
        })
      },components:{
         NavBar
    },methods:{
         increment(){
           this.count++
         },decrement(){
           if (this.count>1){
             this.count--
           }
        },addcard:function () {
           let  data={
             sid:this.details.sid,
             uid:this.$store.state.loginstate.uid,
             sname:this.details.sname,
             totalprice:this.details.price*this.count,
             scount:this.count,
             simg:this.details.img
           }
            card(data.sid,data.uid,data.sname,data.scount,data.totalprice,data.simg).then(res=>{
               alert("添加成功")
               this.$router.push({
                 path:'/card'
               })
            }).catch(res=>{
              console.log(res);
            });
         },addcard1(){
           this.$router.push({
             path:'/login'
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

  .navbar-color{
    background-color: var(--color-tint);
  }

  .count{
    width: 50px;
    height: 30px;
  }

  .shopitem input{
    height: 30px;
    width: 80px;
  }

  .shopitem{
    margin-left: 30px;
  }
  .btn{
    height: 40px;
    width: 120px;
    margin-top: 10px;
    background-color: indianred;
    color: #f6f6f6;
  }
</style>
