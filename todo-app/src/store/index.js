import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const storage = {
  fetch() {
    const arr = []
    if (localStorage.length > 0) {
      for (let i = 0; i < localStorage.length; i++) {
        if (localStorage.key(i) !== 'loglevel:webpack-dev-server') {
          arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))))
        }
      }
    }
    return arr
  },
}

export default new Vuex.Store({
  state: {
    todoItems: storage.fetch(),
    filter: 'all',
  },
  getters: {
    storedTodoItems(state) {
      return state.todoItems
    },
    filteredTodos(state) {
      switch (state.filter) {
        case 'all':
        default:
          return state.todoItems
        case 'active':
          return state.todoItems.filter(todoItem => !todoItem.completed)
        case 'completed':
          return state.todoItems.filter(todoItem => todoItem.completed)
      }
    },
  },
  mutations: {
    updateFilter(state, filter) {
      state.filter = filter
    },
    addOneItem(state, todoItem) {
      let status = {
        completed: false,
        item: todoItem,
      }
      localStorage.setItem(todoItem, JSON.stringify(status))
      state.todoItems.push(status)
    },
    toggleOneItem(state, { todoItem, index }) {
      state.todoItems[index].completed = !state.todoItems[index].completed
      localStorage.removeItem(todoItem.item)
      localStorage.setItem(todoItem.item, JSON.stringify(todoItem))
    },
    removeOneItem(state, { todoItem, index }) {
      localStorage.removeItem(todoItem.item)
      state.todoItems.splice(index, 1)
    },
    completeAllItem(state) {
      state.todoItems.forEach(todoItem => {
        todoItem.completed = true
        localStorage.removeItem(todoItem.item)
        localStorage.setItem(todoItem.item, JSON.stringify(todoItem))
      })
    },
    completeDelItem(state) {
      for (let i = state.todoItems.length - 1; i > -1; i--) {
        if (state.todoItems[i].completed == true) {
          localStorage.removeItem(state.todoItems[i].item)
          state.todoItems.splice(i, 1)
        }
      }
    },
    clearAllItem(state) {
      state.todoItems = []
      localStorage.clear()
    },
  },
  actions: {},
  modules: {},
})
