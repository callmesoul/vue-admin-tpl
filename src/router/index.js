import Vue from 'vue'
import Router from 'vue-router'
const Login = () => import(/* webpackChunkName: "login" */ '@/pages/login/Login')
const LayOut = () => import(/* webpackChunkName: "layout" */ '@/components/layout/LayOut')
const Index = () => import(/* webpackChunkName: "index" */ '@/pages/index/Index')

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'layout',
      component: LayOut,
      meta:{hidden:true},
      redirect:'/index',
      children:[
        {
          path: '/login',
          name: 'login',
          component: Login,
          meta:{title:'登录'}
        },
        {
          path: '/index',
          name: 'index',
          component: Index,
          meta:{title:'首页'}
        },
      ]
    }
  ]
})
