import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/login',
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('@/views/LoginPage'),
    },
    {
      path: '/signup',
      name: 'Signup',
      component: () => import('@/views/SignupPage'),
    },
    {
      path: '/main',
      name: 'Main',
      component: () => import('@/views/MainPage'),
      meta: { auth: true },
    },
    {
      path: '/add',
      name: 'Add',
      component: () => import('@/views/PostAddPage'),
      meta: { auth: true },
    },
    {
      path: '/post/:id',
      name: 'Edit',
      component: () => import('@/views/PostEditPage'),
      meta: { auth: true },
    },
    {
      path: '*',
      component: () => import('@/views/NotFoundPage'),
    },
  ],
})

router.beforeEach((to, from, next) => {
  if (to.meta.auth && !store.getters.isLogin) {
    confirm('인증이 필요합니다.')
    next('/login')
    return
  }
  next()
})

export default router
