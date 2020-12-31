<template>
  <draggable
    class="todo-list"
    :list="this.storedTodoItems"
    :options="{ animation: 300, handle: '.list-item' }"
  >
    <transition-group
      type="transition"
      tag="ul"
      name="list"
      v-if="this.storedTodoItems !== ''"
    >
      <li
        v-for="(todoItem, index) in this.storedTodoItems"
        :key="todoItem.item + todoItem.index"
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
        <p>
          {{ todoItem.item }}
        </p>
        <div>
          <button class="todo-button" type="button" title="edit">
            <i class="icon ion-md-create"></i>
          </button>
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
    </transition-group>
    <div class="enjoy" v-else>
      Enjoy todo app
    </div>
  </draggable>
</template>

<script>
import draggable from 'vuedraggable'
import { mapGetters, mapMutations } from 'vuex'

export default {
  components: {
    draggable,
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
