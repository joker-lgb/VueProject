<template>
     <div>
      <form  method="post" id="dataform" >
          username:<input name="uname" type="text"><br>
          uage:<input name="uage" type="text"><br>
          password:<input name="password" type="password"><br>
        <button @click="regclick" type="button">提交</button>
      </form>
     </div>
</template>

<script>
  import axios from 'axios'
    export default {
        name: "Register",
        methods:{
          regclick:function () {
            let data=new FormData(document.getElementById("dataform"));
            axios.post("http://localhost:8881/adduser",data).then(res=>{
              alert("注册成功");
               this.$router.push({
                    path:"/home"
                  })
            }).catch(error=>{
              console.log(error)
            })
          }
        },
    }
</script>

<style scoped>

</style>
