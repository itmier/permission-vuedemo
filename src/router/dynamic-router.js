import Page403 from '@/pages/errorPage/403.vue'
import Page404 from '@/pages/errorPage/404.vue'
import Login from '@/pages/login/login.vue'
import Layout from '@/pages/layout/index.vue'
import Home from '@/pages/home/index.vue'

const dynamicRoutes = [
    {
      path: "/login",
      name: "Login",
      component: Login,
      meta: {
        name: "登录页面",
        icon: "nested"
      }
    },
    {
      path: "/403",
      name: "Page403",
      component: Page403,
      meta: {
        name: "403页面",
        icon: "nested"
      }
    },
    {
      path: "*",
      name: "Page404",
      component: Page404,
      meta: {
        name: "404页面",
        icon: "nested"
      }
    }
  ]
  export default dynamicRoutes