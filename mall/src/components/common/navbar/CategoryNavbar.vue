<template>

  <div>
    <div id="box1">
      <ul>
        <li><a class="pointer" @click="clothes">衣服</a></li>
        <li><a class="pointer" @click="pants">裤子</a></li>
        <li><a class="pointer" @click="shoe">鞋子</a></li>
      </ul>
    </div>

  </div>

</template>

<script>

  import 'bootstrap/dist/css/bootstrap.min.css'
    export default {
        name: "CategoryNavbar",
      methods:{
          clothes:function () {
           this.$router.push({
             path:'/clothes',
           })
          },
        shoe:function () {
        this.$router.push({
          path:'/shoe'
        })
        },
        pants:function () {
        this.$router.push({
         path:'/pants'
        })
        }
      }
    }
</script>

<style scoped>
  #box1{
    width: 100px;
    height: 500px;
    border: #5c6b77 solid;

  }



  a:hover{
    text-decoration:none;
    color:#333;
  }

  ul li{
    list-style: none;
    margin-bottom: 30px;
    text-align: center;
  }

  .pointer{
    cursor: pointer;
  }
</style>
