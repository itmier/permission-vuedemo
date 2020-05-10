import Vue from 'vue'
import VueRouter from 'vue-router'
import Page403 from '../pages/errorPage/403.vue'
import Page404 from '../pages/errorPage/404.vue'
import Login from '../pages/login/login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login
  },{
    path: '/403',
    name: 'Page403',
    component: Page403
  },
  {
    path: '*',
    name: 'Page404',
    component: Page404
  }
]

const router = new VueRouter({
  routes
})

export default router
