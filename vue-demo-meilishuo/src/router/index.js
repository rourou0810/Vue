import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import Category from '../views/Category'
import CartBag from '../views/CartBag'
import ProductList from '../views/ProductList'
import ProductDetail from '../views/ProductDetail'
import Login from '../views/Login'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
    	path: '/home',
    	component: Home
    },{
    	path: '/category',
    	component: Category
    },{
      path: '/category/:id',
      component: ProductList
    },{
    	path: '/cartbag',
    	component: CartBag
    },{
      path: '/product_detail/:id',
      component: ProductDetail
    },{
      path: '/login',
      component: Login
    },{//重定向
		  path: '*', 
      redirect: '/home'
	  }
  ]
})
