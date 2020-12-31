import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/main',
  },
  {
    name: 'Main',
    path: '/main',
    component: () => import('@/views/MainPage'),
  },
  {
    name: 'About',
    path: '/about',
    component: () => import('@/views/AboutPage'),
  },
  {
    name: 'Todos',
    path: '/todos',
    // redirect: '/todos/all',
    component: () => import('@/views/TodoPage'),
    // children: [{ name: 'todos-filter', path: ':id' }],
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
