<template>
  <div class="todo-create">
    <input
      type="text"
      placeholder="enter your task"
      :value="newTodoItem"
      @input="newTodoItem = $event.target.value"
      @keypress.enter="addTodo"
    />
    <button type="button" class="todo-button" @click="addTodo">
      <i class="icon ion-md-return-left"></i>
    </button>
    <modal v-if="showModal" @close="showModal = false">
      <!--
      you can use custom content here to overwrite
      default content
    -->
      <h3 slot="header">warning!</h3>
      <div slot="body">task cannot be emthy</div>
    </modal>
  </div>
</template>

<script>
import Modal from '@/components/common/Modal'
export default {
  components: {
    Modal,
  },
  data() {
    return {
      newTodoItem: '',
      showModal: false,
    }
  },
  methods: {
    addTodo() {
      if (this.newTodoItem !== '') {
        this.newTodoItem = this.newTodoItem.trim()
        this.$store.commit('addOneItem', this.newTodoItem)
        this.initInput()
      } else {
        this.showModal = !this.showModal
      }
    },
    initInput() {
      this.newTodoItem = ''
    },
  },
}
</script>
