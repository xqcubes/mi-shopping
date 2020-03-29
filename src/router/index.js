import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home.vue'
import Index from '../views/index.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    redirect: '/index',
    children: [{
      path: 'index',
      component: Index
    },
    {
      path: 'product/:id',
      component: () => import('../views/product.vue')
    },
    {
      path: 'detail/:id',
      component: () => import('../views/detail.vue')
    }
    ]
  },
  {
    path: '/order',
    name: 'Order',
    component: () => import('../views/order.vue')
    // children: [
    //   {

    //   }
    // ]

  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
