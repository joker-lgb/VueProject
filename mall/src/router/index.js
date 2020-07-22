import Vue from "vue"
import VueRouter from 'vue-router'

Vue.use(VueRouter);

const Home= () => import('../views/home/Home')
const Cart=()=>import('../views/cart/Cart')
const Profile=() => import('../views/profile/Profile')
const details=() => import('../views/details/DetailsShop')
const register=() =>import('../views/profile/Register')
const login=() =>import('../views/profile/login')
const clothes=() =>import('../views/category/Clothes')
const shoe=()=>import('../views/category/Shoe')
const pants=()=>import('../views/category/Pants')


const routes=[
  {
    path:'',
    redirect:'/home'
  },
  {
    path:'/home',
    component:Home,
  },{
    path: '/cart',
    component:Cart,
  },{
    path: '/profile',
    component:Profile
  },
  {
    path: '/details',
    component:details
  },{
    path: '/register',
    component:register
  },{
    path: '/login',
    component:login
  },{
    path: '/clothes',
    component:clothes
  },{
   path: '/shoe',
   component:shoe
  },{
   path: '/pants',
   component:pants
  }

]

const router=new VueRouter({
  routes,
  mode:'history'
})

export default router
