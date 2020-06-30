<template>
    <div class="tab-bar-item" @click="itemclick" :class="{active:isActive}">
      <slot name="item-icon"></slot>
      <div :style="activeStyle"><slot name="item-text"></slot></div>
    </div>
</template>

<script>
    export default {
        name: "TabBaritem",
        props:{
         path:String,

         activeColor:{
           type:String,
           default:'red',
         }
        },
        data(){
         return {
         /*  isActive:true,*/
         }
      },methods:{
          itemclick:function () {
             this.$router.replace(this.path)
          },
      },computed:{
          isActive(){
          return this.$route.path.indexOf(this.path) !==-1
          },
        activeStyle(){
            return this.isActive ?{color:this.activeColor} :{}
        }
      }
    }
</script>

<style scoped>
  .tab-bar-item{
    flex: 1;
    text-align: center;
    height: 49px;
  }

  .tab-bar-item img{
    height: 24px;
    width: 24px;
  }

  .active{
    color: red;
  }
</style>
