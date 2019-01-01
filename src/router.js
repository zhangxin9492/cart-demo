import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Goods from './views/Good.vue'
import Cart from './views/Cart.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/goods',
      component: Goods
    },
    {
      path: '/cart',
      component: Cart
    }
  ]
})
