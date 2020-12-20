<template>
  <LoadingSpinner v-if="isLoading" />
  <section class="main-contents" v-else>
    <h2>Note List</h2>
    <draggable
      class="post-wrap"
      :list="postItems"
      :options="{ animation: 300, handle: '.post-list' }"
      element="ul"
    >
      <PostListItem
        v-for="postItem in postItems"
        :key="postItem._id"
        :postItem="postItem"
        @refresh="fetchData"
      />
      <li class="button-wrap">
        <router-link to="/add" class="create-button"
          ><i class="ion-md-add"></i>Add post</router-link
        >
      </li>
    </draggable>
  </section>
</template>

<script>
import PostListItem from '@/components/post/PostListItem'
import LoadingSpinner from '@/components/common/LoadingSpinner'
import { fetchPosts } from '@/api/posts'
import draggable from 'vuedraggable'

export default {
  components: {
    PostListItem,
    LoadingSpinner,
    draggable,
  },
  data() {
    return {
      postItems: [],
      isLoading: false,
    }
  },
  methods: {
    async fetchData() {
      this.isLoading = true
      const { data } = await fetchPosts()
      this.postItems = data.posts
      this.isLoading = false
    },
  },
  created() {
    this.fetchData()
  },
}
</script>
