import Vue from 'vue'
import VueRouter from 'vue-router'

import News from '@/views/News'
import Ask from '@/views/Ask'
import Jobs from '@/views/Jobs'
import User from '@/views/User'
import Item from '@/views/Item'
// import createListView from '@/views/CreateListView'
import bus from '@/utils/bus'
import store from '@/store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/news'
  },
  {
    path: '/news', // path: url
    name: 'news',
    // component: createListView('News'),  // component: url 주소로 갔을 때 표시 될 component
    component: News,
    beforeEnter: (to, from, next) => {
      // console.log('to', to) // 이동할 url 라우팅 정보
      // console.log('from', from) // 현재 url 라우팅 정보
      // console.log('next', next) // next 호출 해야지 해당 url로 이동
      bus.$emit('start:spinner')
      // #1
      store.dispatch('FETCH_LIST', to.name)
        .then(() => {
          // #5
          console.log('fetched')
          // bus.$emit('end:spinner')
          next()
        })
        .catch((error) => {
          console.log(error)
        })
    },
  },
  {
    path: '/ask',
    name: 'ask',
    // component: createListView('Ask'), 
    component: Ask,
    beforeEnter: (to, from, next) => {
      bus.$emit('start:spinner')
      // #1
      store.dispatch('FETCH_LIST', to.name)
        .then(() => {
          // #5
          console.log('fetched')
          // bus.$emit('end:spinner')
          next()
        })
        .catch((error) => {
          console.log(error)
        })
    },
  },
  {
    path: '/jobs',
    name: 'jobs',
    // component: createListView('Jobs'),
    component: Jobs,
    beforeEnter: (to, from, next) => {
      bus.$emit('start:spinner')
      // #1
      store.dispatch('FETCH_LIST', to.name)
        .then(() => {
          // #5
          console.log('fetched')
          // bus.$emit('end:spinner')
          next()
        })
        .catch((error) => {
          console.log(error)
        })
    },
  },
  {
    path: '/user/:id',
    name: 'User',
    component: User,
  },
  {
    path: '/item/:id',
    name: 'Item',
    component: Item,
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
