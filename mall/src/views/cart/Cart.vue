<template>
  <div>
    <NavBar class="navbar-color"><div slot="center">购物车</div></NavBar>
    <CartList :cartlist="cartlist" v-if="$store.state.loginstate"></CartList>
    <div v-else>
      <h1>你还没有登录</h1>
    </div>
  </div>


</template>

<script>
    import NavBar from "components/common/navbar/NavBar";
    import CartList from "../../components/common/cart/CartList";
    import {showcart} from "../../notwork/cart";

    export default {
        name: "Cart",
        data(){
          return{
            cartlist: null,
            uid:this.$store.state.loginstate.uid,
          }
        },
        components:{
          NavBar,
          CartList
        },created() {
           showcart(this.uid).then(res=>{
            this.cartlist=res.data
          })
      }
    }
</script>

<style scoped>
  .navbar-color{
    background-color: var(--color-tint);
  }
</style>
