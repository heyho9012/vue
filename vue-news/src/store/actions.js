import { 
  fetchList,
  fetchUserInfo,
  fetchItemInfo,
} from '@/api'

export default {
  async FETCH_USER({ commit }, userName) {
    const response = await fetchUserInfo(userName)
    commit('SET_USER', response.data)
    return response
  },
  async FETCH_ITEM({ commit }, itemId) {
    const response = await fetchItemInfo(itemId)
    commit('SET_ITEM', response.data)
    return response
  },
  // #2
  // promise
  // FETCH_LIST({ commit }, pageName) {
  //   // #3
  //   return fetchList(pageName)
  //     .then(response => {
  //       // #4
  //       commit('SET_LIST', response.data)
  //       return response
  //     })
  //     .catch(error => console.log(error))
  // },

  // async
  async FETCH_LIST({ commit }, pageName) {
    const response = await fetchList(pageName)
    commit('SET_LIST', response.data)
    return response
  }
}