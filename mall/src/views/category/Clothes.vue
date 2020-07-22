<template>
    <div>
      <NavBar class="navbar-color"><div slot="center">分类</div></NavBar>
      <CategoryNavbar></CategoryNavbar>
       <div id="box1">
          <ul>
            <li v-for="(item,index) in clotheslist">
              <img :src="item.img" class="img" @click="clothesclick(index)">
            </li>
          </ul>
       </div>
    </div>
</template>
<script>
  import NavBar from "components/common/navbar/NavBar";
  import CategoryNavbar from "components/common/navbar/CategoryNavbar";
  import {queryclothes} from "../../notwork/category";

  export default {
        name: "clothes",
       data(){
          return{
           clotheslist:null,
          }
       },
       components:{
          CategoryNavbar,
          NavBar,
       },created() {
        queryclothes().then(res=>{
          console.log(res.data);
          this.clotheslist=res.data;
        })
      },methods:{
          clothesclick:function (index) {
             this.$router.push({
               path:'/details',
               query:{
                 sid:this.clotheslist[index].sid
               }
             })
          }
    }
    }
</script>

<style scoped>
  #box1{
   position:relative;
   left: 110px;
   bottom: 500px;
  }
  .img{
    width: 300px;
    height: 350px;
    float: left;
    margin-right: 30px;
  }
  ul{
    list-style: none;
    cursor: pointer;
  }
  .navbar-color{
    background-color: var(--color-tint);
  }

  .img:hover{
    border: #5c6b77 solid 2px;
    box-shadow:-2px 0 3px hotpink;
  }
</style>
