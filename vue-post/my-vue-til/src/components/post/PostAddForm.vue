<template>
  <section class="main-contents post-contents">
    <h2>Create Post</h2>
    <form class="form" @submit.prevent="submitForm">
      <div>
        <label for="title">title</label>
        <input type="text" id="title" v-model="title" />
        <p class="warning">{{ logMessage }}</p>
      </div>
      <div>
        <label for="contents">contents</label>
        <textarea type="text" id="contents" v-model="contents" />
        <p class="warning" v-if="!isContentsValid">
          Contents length must be less than 200
        </p>
      </div>
      <button type="submit" :disabled="!isContentsValid">create</button>
    </form>
  </section>
</template>

<script>
import { createPost } from '@/api/posts'

export default {
  data() {
    return {
      title: '',
      contents: '',
      logMessage: '',
    }
  },
  computed: {
    isContentsValid() {
      return this.contents.length <= 200
    },
  },
  methods: {
    async submitForm() {
      try {
        const response = await createPost({
          title: this.title,
          contents: this.contents,
        })
        this.$router.push('/main')
      } catch (error) {
        console.log(error.response.data.message)
        this.logMessage = error.response.data.message
      }
    },
  },
}
</script>
