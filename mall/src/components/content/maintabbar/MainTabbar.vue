<template>
    <TabBar>
      <TabBaritem path="/home" activeColor="yellow">
        <img  slot="item-icon" src="~assets/img/tabbar/home.png">
        <div slot="item-text">首页</div>
      </TabBaritem>
      <TabBaritem path="/clothes" activeColor="greed">
        <img  slot="item-icon" src="~assets/img/tabbar/menu.png">
        <div slot="item-text">分类</div>
      </TabBaritem>
      <TabBaritem path="/cart" activeColor="blue">
        <img  slot="item-icon" src="~assets/img/tabbar/cart.png">
        <div slot="item-text">购物车</div>
      </TabBaritem>
      <TabBaritem path="/profile" activeColor="pink">
        <img  slot="item-icon" src="~assets/img/tabbar/nickname.png">
        <div slot="item-text">我的</div>
      </TabBaritem>
    </TabBar>
</template>

<script>
  import TabBaritem from "components/common/tabbar/TabBaritem";
  import TabBar from    "components/common/tabbar/TabBar";
    export default {
        name: "MainTabbar",
        components:{
          TabBaritem,
          TabBar,
        }
    }
</script>

<style scoped>

</style>
