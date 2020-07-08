<template>

  <div v-if="$store.state.loginstate">
    <NavBar class="navbar-color"><div slot="center">我的</div></NavBar>
    <h1>welcome:{{$store.state.loginstate.uname}}</h1>
    <button type="button" @click="userlogout">注销</button>
  </div>
  <div v-else>
    <NavBar class="navbar-color"><div slot="center">我的</div></NavBar>
    <button type="button" @click="userreg">注册</button>/
    <button type="button" @click="userlog">登录</button>
  </div>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar";
    export default {
        name: "Profile",
        methods:{
          userreg:function () {
           this.$router.push({
             path:'/register',
           })
          },
          userlog:function () {
            this.$router.push({
              path:'/login',
            })
          },userlogout:function () {
           this.$store.state.loginstate=null;
           location.reload();
          }
        },components:{
          NavBar
      }
    }
</script>

<style scoped>
  .navbar-color{
    background-color: var(--color-tint);
  }
</style>
