import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home'
import Category from '@/views/Category'
import CartBag from '@/views/CartBag'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/',
      component: Home
    },{
    	path: '/home',
    	component: Home
    },{
    	path: '/category',
    	component: Category
    },{
    	path: '/cartbag',
    	component: CartBag
    }, {
		path: '*', redirect: '/'
	}
  ]
})
