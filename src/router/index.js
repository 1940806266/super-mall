import Vue from 'vue'
import VueRouter from 'vue-router'
const Home = ()=> import("../views/home/Home.vue")
const Category = ()=>import("../views/category/Category.vue")
const Profile = ()=>import("../views/profile/Profile.vue")
const Cart = ()=>import("../views/cart/Cart.vue")
const originalPush = VueRouter.prototype.replace//解决重复点击 路由报错的问题
VueRouter.prototype.replace = function replace(location) {
  return originalPush.call(this, location).catch(err => err)
}
Vue.use(VueRouter)

const routes = [
  {
    path:'',
    redirect:"/home"
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/profile',
    component: Profile
  },
  {
    path:"/cart",
    component:Cart
  },
  {
    path:"/category",
    component:Category
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
