<template>
  <section class="main-contents post-contents">
    <h2>Edit Post</h2>
    <form class="form" @submit.prevent="submitForm">
      <div>
        <label for="title">title</label>
        <input type="text" id="title" v-model="title" />
      </div>
      <div>
        <label for="contents">contents</label>
        <textarea type="text" id="contents" v-model="contents" />
        <p class="warning" v-if="!isContentsValid">
          Contents length must be less than 200
        </p>
      </div>
      <p class="warning log">{{ logMessage }}</p>
      <button type="submit" :disabled="!isContentsValid">Edit</button>
    </form>
  </section>
</template>

<script>
import { fetchPost, editPost } from '@/api/posts'
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
      const id = this.$route.params.id
      try {
        await editPost(id, {
          title: this.title,
          contents: this.contents,
        })
        this.$router.push('/main')
      } catch (error) {
        console.log(error)
        this.logMessage = error
      }
    },
  },
  async created() {
    const id = this.$route.params.id
    const { data } = await fetchPost(id)
    this.title = data.title
    this.contents = data.contents
  },
}
</script>
