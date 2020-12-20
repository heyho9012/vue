<template>
  <li class="post-list">
    <div class="post-title">
      {{ postItem.title }}
    </div>
    <div class="post-contents">
      {{ postItem.contents }}
    </div>
    <div class="post-time">
      {{ postItem.createdAt | formatDate }}
      <i
        class="icon ion-md-create"
        @click="routeEditPage"
        title="edit"
        alt="edit"
      ></i>
      <i
        class="icon ion-md-trash"
        @click="deleteItem"
        title="trash"
        alt="trash"
      ></i>
    </div>
  </li>
</template>

<script>
import { deletePost } from '@/api/posts'

export default {
  props: {
    postItem: {
      type: Object,
      required: true,
    },
  },
  methods: {
    routeEditPage() {
      const id = this.postItem._id
      this.$router.push(`/post/${id}`)
    },
    async deleteItem() {
      const id = this.postItem._id
      if (confirm('Are you sure want to delete this post?')) {
        await deletePost(id)
        this.$emit('refresh')
      }
    },
  },
}
</script>

<style lang="scss" scoped></style>
