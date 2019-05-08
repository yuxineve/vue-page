import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/login.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login,
      children: [
        {
          path: '',
          name: 'Child',
          component: () => import('./views/Child.vue')
        }
      ]
    },
    {
      path: '/home',
      name: 'Home',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/home.vue'),
      children: [
        {
          path: '',
          name: 'Child',
          component: () => import('./views/Child.vue')
        }
      ]
    }
  ]
})
