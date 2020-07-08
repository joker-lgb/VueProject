<template>
  <div>
    <NavBar class="navbar-color"><div slot="center">购物车</div></NavBar>
    <CardList :cardlist="cardlist" v-if="$store.state.loginstate"></CardList>
    <div v-else>
      <h1>你还没有登录</h1>
    </div>
  </div>


</template>

<script>
    import NavBar from "components/common/navbar/NavBar";
    import CardList from "../../components/common/card/CardList";
    import {showcard} from "../../notwork/card";

    export default {
        name: "Card",
        data(){
          return{
            cardlist: null,
            uid:this.$store.state.loginstate.uid,
          }
        },
        components:{
          NavBar,
         CardList
        },created() {
           showcard(this.uid).then(res=>{
            this.cardlist=res.data
          })
      }
    }
</script>

<style scoped>
  .navbar-color{
    background-color: var(--color-tint);
  }
</style>
