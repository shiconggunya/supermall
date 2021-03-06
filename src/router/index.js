import Vue from 'vue'
import VueRouter from 'vue-router'

//1.安装插件
Vue.use(VueRouter)

//懒加载
const Home =()=>import('../views/home/Home.vue')
const Category = ()=> import('../views/category/Category.vue')
const Cart = ()=> import('../views/cart/Cart.vue')
const Profile = ()=>import('../views/profile/Profile.vue')
const Detail = () => import('../views/detail/Detail.vue')

//配置映射关系
const routes =[
  {
    path:'',
    redirect:'/home'
  },
  {
    path:'/home',
    component:Home,
  },
  {
    path:'/category',
    component:Category,
  },
  {
    path:'/cart',
    component:Cart,
  },
  {
    path:'/profile',
    component:Profile,
  },
  {
    path:'/detail/:iid',
    component:Detail,
  }
]

//2.创建路由对象
const router = new VueRouter({
  routes,
  mode:'history',
})

//3.导出
export default router