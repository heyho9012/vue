import Vue from 'vue'
import Vuex from 'vuex'

import { loginUser } from '@/api/auth'
import {
  saveAuthToCookie,
  saveUserToCookie,
  getUserFromCookie,
  getAuthFromCookie,
} from '@/utils/cookies'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    username: getUserFromCookie() || '',
    token: getAuthFromCookie() || '',
  },
  getters: {
    isLogin(state) {
      return state.username !== ''
    },
  },
  mutations: {
    setUsername(state, username) {
      state.username = username
    },
    clearUsername(state) {
      state.username = ''
    },
    setToken(state, token) {
      state.token = token
    },
    clearToken(state) {
      state.token = ''
    },
  },
  actions: {
    async LOGIN({ commit }, userData) {
      const response = await loginUser(userData)
      commit('setUsername', response.data.user.username)
      commit('setToken', response.data.token)
      saveUserToCookie(response.data.user.username)
      saveAuthToCookie(response.data.token)
      return response.data
    },
  },
  modules: {},
})
