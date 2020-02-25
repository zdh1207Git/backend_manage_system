import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/index'
import Register from '../views/Register'
import Login from '../views/Login'
import Notfound from '../views/404'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/index',
  },
  {
    path: '/index',
    name: 'index',
    component: Index
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/*',
    name: '404',
    component: Notfound
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach( (to, from, next) => {
  (to.path == '/login' || to.path == '/register' || localStorage.eleToken)? next(): next('/login')
})
export default router
