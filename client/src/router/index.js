import Vue from 'vue'
import Router from 'vue-router'
import Index from '../views/Index'
import Register from '../views/Register'
import Notfound from '../views/404'
import Login from '../views/Login'
import Home from '../views/Home'
import InfoShow from '../views/InfoShow'
import FoundList from '../views/FoundList'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { path: '*', name: '/404', component: Notfound },
    { path: '/', redirect: '/index' },
    { path: '/register', name: 'register', component: Register },
    { path: '/login', name: 'login', component: Login },
    {
      path: '/index',
      name: 'index',
      component: Index,
      children: [
        { path: '', component: Home },
        { path: '/home', name: 'home', component: Home },
        { path: '/infoshow', name: 'infoshow', component: InfoShow },
        { path: '/foundlist', name: 'foundlist', component: FoundList }
      ]
    },

    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
  ]
})

router.beforeEach( (to, from, next) => {
  (to.path == '/login' || to.path == '/register' || localStorage.eleToken)? next(): next('/login')
})
export default router
