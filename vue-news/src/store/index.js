import Vue from 'vue'
import Vuex from 'vuex'

import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {},
    item: {},
    list: [],
  },
  getters: {
    fetchedNews(state) {
      return state.news
    },
    fetchedAsk(state) {
      return state.ask
    },
    fetchedJobs(state) {
      return state.jobs
    },
    fetchedUser(state) {
      return state.user
    },
    fetchedItem(state) {
      return state.item
    },
  },
  mutations,
  actions,
  modules: {
  }
})
