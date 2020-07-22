<template>
  <div>
    <div v-if="cartlist.length">
      <table border="1">
        <tr>
          <th>商品编号</th>
          <th>商品名称</th>
          <th>商品图片</th>
          <th>商品数量</th>
          <th>商品价格</th>
          <th>操作</th>
        </tr>
        <tbody>
        <tr v-for="(item,index) in cartlist">
          <td>{{item.sid}}</td>
          <td>{{item.sname}}</td>
          <td><img :src="item.simg" width="50px" height="50px"></td>
          <td>{{item.scount}}</td>
          <td>{{item.totalprice}}</td>
          <td><button type="button" @click="delcart(index)">移除</button></td>
        </tr>
        </tbody>
      </table>
      <h1>总价格:{{totalprice}}</h1>
    </div>

    <div v-else>
      <h1>购物车为空</h1>
    </div>
  </div>


</template>

<script>
    import {delcartbyid} from "../../../notwork/cart";

    export default {
        name: "ShowCart",
        props:{
          cartlist:{
             type:Array,
          }
        },components:{

     },computed:{
          totalprice:function () {
            let sum=0;
            for (let i = 0; i <this.cartlist.length ; i++) {
              sum+=this.cartlist[i].totalprice;
            }
            return sum;
          }
       },methods:{
          delcart:function (index) {
              delcartbyid(this.cartlist[index].cid).then(res=>{
                alert("SUCCESS")
                this.cartlist.splice(index,1)
              })
          }
      }
    }
</script>

<style scoped>
  table{
    border: 1px solid #e9e9e9;
    border-collapse: collapse;
    border-spacing: 0;
  }

  td th{
    padding: 8px 16px;
    border: 1px solid #e9e9e9;
    text-align: center;
  }

  td{
    background-color: #f7f7f7;
    color: #5c6b77;
    font-weight: 600;
  }
</style>
