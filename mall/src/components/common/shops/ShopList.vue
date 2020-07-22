<template>
  <div>
    <div>
      <Shopitem v-for="item in shopList.list" :shopitem="item"> </Shopitem>
    </div>


    <div class="page-box">
      <ul>
        <li class="li_btn" @click="prevpage"><<</li>
        <li class="li_btn" v-for="page in shopList.pages" @click="currentclick(page)">{{page}}</li>
        <li class="li_btn" @click="nextpage">>></li>
        <li><h3>当前在：第{{shopList.pageNum}}页</h3></li>
      </ul>
    </div>
  </div>

</template>

<script>
    import Shopitem from "./Shopitem";
    import {getpage} from "../../../notwork/home";

    export default {
        name: "HomeList",
        props:{
           shopList:{
             type:Object,
           }
        },components:{
          Shopitem,
      },methods:{
          currentclick:function (page) {
            if (page===this.shopList.pageNum){
              return false;
            }
            console.log("-------")
             getpage(page).then(res=>{
               this.$emit("pageclick",res.data)
             })
          },prevpage:function () {
            getpage(this.shopList.pageNum-1).then(res=>{
              if (this.shopList.pageNum===1){
                return false;
              }
              console.log("-------")
              this.$emit("pageclick",res.data)
            })
        },nextpage:function () {
          getpage(this.shopList.pageNum+1).then(res=>{
            if (this.shopList.pages===this.shopList.pageNum){
              return false;
            }
            console.log("-------")
            this.$emit("pageclick",res.data)
          })
        }
      }
    }
</script>

<style scoped>
  .li_btn{
    width: 38px;
    height: 28px;
    border: solid 1px #e3e3e3;
    text-align: center;
    list-style: none;
    float: left;
    line-height:28px;
    font-size: 18px;
    color:#858585;
    position: relative;
    left: 888px;
  }
  .li_btn:hover{
    cursor: pointer;
    line-height:28px;
    font-size: 18px;
    background-color: #00bcd4;
    color:#fff;

  }
.page-box{
    width:  100%;
    height: 300px;
  }
 ul{
   margin-top: 60px;
   list-style: none;
 }



</style>
