<template>
    <div>
      <form method="post" id="formdata">
        username:<input type="text" v-model="uname"><br>
        password:<input type="password" v-model="password" ><br>
            code:<input type="text" v-model="code"><img src="http://localhost:8881/code" id="img"> <button type="button" @click="reloadcode">看不清?换一张</button><br>
        <button type="button" @click="loginclick">login</button>
      </form>
    </div>
</template>

<script>
    import {login} from "../../notwork/login";
    import $ from 'jquery'

    export default {
        name: "login",
        data(){
          return {
          uname:'',
          password:'',
            code:'',
          }
        },
        methods:{
          loginclick:function () {
            login(this.uname,this.password,this.code).then(res=>{
             if (res.data.uname){
               this.$store.state.loginstate=res.data;
               alert("登录成功")
               this.$router.push({
                 path:'/home'
               })
             }else{
               alert(res.data)
             }
            }).catch(error=>{
              alert("error")
            })
          },reloadcode:function () {
              $("#img").attr("src","http://localhost:8881/code?t="+new Date().getTime())
          }
        },
    }
</script>

<style scoped>

</style>
