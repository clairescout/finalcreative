import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/HomePage'
import Shop from '@/components/Shop'
import About from '@/components/About'
import RedThreaders from '@/components/RedThreaders'
import Login from '@/components/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/shop',
      name: 'Shop',
      component: Shop
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/redthreaders',
      name: 'RedThreaders',
      component: RedThreaders
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
