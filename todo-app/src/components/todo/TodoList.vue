<template>
  <div class="todo-list">
    <draggable
      tag="ul"
      :list="storedTodoItems"
      :options="{ animation: 300, handle: '.list-item' }"
    >
      <li
        v-for="(todoItem, index) in storedTodoItems"
        :key="todoItem.item + index"
        class="list-item"
      >
        <input
          type="checkbox"
          :id="todoItem.item"
          :checked="todoItem.completed == true"
          @click="toggleComplete({ todoItem, index })"
        />
        <label :for="todoItem.item"
          ><i class="icon ion-md-checkmark"></i
        ></label>
        <p>{{ todoItem.item }}</p>
        <div>
          <button
            class="todo-button delete-button"
            type="button"
            @click="removeTodo({ todoItem, index })"
            title="delete"
          >
            <i class="icon ion-md-trash"></i>
          </button>
        </div>
      </li>
    </draggable>
    <div class="enjoy" v-show="storedTodoItems == ''">
      Enjoy todo app
    </div>
  </div>
</template>

<script>
import draggable from 'vuedraggable'
import { mapGetters, mapMutations } from 'vuex'

export default {
  components: {
    draggable,
  },
  data() {
    return {
      inputOption: false,
      eventValue: '',
    }
  },
  computed: {
    ...mapGetters(['storedTodoItems']),
  },
  methods: {
    ...mapMutations({
      removeTodo: 'removeOneItem',
      toggleComplete: 'toggleOneItem',
    }),
  },
}
</script>

<style lang="scss"></style>
