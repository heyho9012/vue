<template>
  <div class="todo-control">
    <!-- <div class="filters">
      <router-link tag="button" type="button" to="all">all</router-link>
      <router-link tag="button" type="button" to="active">active</router-link>
      <router-link tag="button" type="button" to="completed"
        >completed</router-link
      >
    </div> -->
    <button
      type="button"
      class="control-button complete-button"
      :class="{ active: this.$store.state.todoItems.completed }"
      @click="completeTodo"
      title="completed all"
    >
      <i class="icon ion-md-done-all"></i>
    </button>
    <button
      type="button"
      class="control-button"
      @click="completeDelTodo"
      title="completed delete all"
    >
      <i class="icon ion-md-done-all"></i>
      <i class="icon ion-md-trash"></i>
    </button>
    <button
      type="button"
      class="control-button delete-button"
      @click="clearTodo"
      title="delete all"
    >
      <i class="icon ion-md-trash"></i>
    </button>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  methods: {
    ...mapMutations({
      completeTodo: 'completeAllItem',
      completeDelTodo: 'completeDelItem',
      clearTodo: 'clearAllItem',
    }),
    todoAllCompleted() {
      state.todoItems.forEach(todoItem => {
        todoItem
      })
    },
  },
}
</script>

<style lang="scss"></style>
