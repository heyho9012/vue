<template>
  <section>
    <div class="todo-app">
      <TodoCreate />
      <TodoControl />
      <TodoList />
    </div>
  </section>
</template>

<script>
import TodoCreate from '@/components/todo/TodoCreate'
import TodoControl from '@/components/todo/TodoControl'
import TodoList from '@/components/todo/TodoList'
export default {
  components: {
    TodoCreate,
    TodoControl,
    TodoList,
  },
}
</script>
