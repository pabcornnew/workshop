import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Simple2 from '../views/Simple2.vue'
import Simple3 from '../views/Simple3.vue'
import Simple4 from '../views/Simple4.vue'
// import { component } from 'vue/types/umd'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '',
    name: 'toolbar',
    component: () => import('../views/ToolBar.vue'),
    children: [
      {
        path: '/about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
      },
      {
        path: '/me',
        name: 'me',
        component: () => import('../views/meView.vue')
      },
      {
        path: '/simple',
        name: 'simple',
        component: () => import('../views/Simple.vue')
      },
      {
        path: '/simple2',
        name: 'simple2',
        component: Simple2
      },
      {
        path: '/simple3',
        name: 'simple3',
        component: Simple3
      },
      {
        path: '/simple4',
        name: 'simple4',
        component: Simple4
      }
    ]
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
