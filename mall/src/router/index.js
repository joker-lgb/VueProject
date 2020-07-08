import Vue from "vue"
import VueRouter from 'vue-router'

Vue.use(VueRouter);

const Home= () => import('../views/home/Home')
const Card=()=>import('../views/card/Card')
const Profile=() => import('../views/profile/Profile')
const Category=() => import('../views/category/Category')
const details=() => import('../views/details/DetailsShop')
const register=() =>import('../views/profile/Register')
const login=() =>import('../views/profile/login')

const routes=[
  {
    path:'',
    redirect:'/home'
  },
  {
    path:'/home',
    component:Home,
  },{
    path: '/card',
    component:Card,
  },{
    path: '/profile',
    component:Profile
  },
  {
    path: '/category',
    component:Category
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
  }

]

const router=new VueRouter({
  routes,
  mode:'history'
})

export default router
