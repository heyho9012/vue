<template>
  <section class="app-contents">
    <h2>Log in to app</h2>
    <p class="log-message">{{ logMessage }}</p>
    <div class="contents">
      <form class="form" @submit.prevent="submitForm">
        <div>
          <label for="username">id</label>
          <input
            type="text"
            id="username"
            placeholder="enter email"
            v-model="username"
          />
          <div class="warning" v-if="!isUsernameValid && username">
            Please enter an email address
          </div>
        </div>
        <div>
          <label for="password">password</label>
          <input
            type="password"
            id="password"
            placeholder="enter password"
            v-model="password"
          />
        </div>
        <button type="submit" :disabled="!isUsernameValid || !password">
          log in
        </button>
        <router-link to="/signup" class="signup_link">sign up</router-link>
      </form>
    </div>
  </section>
</template>

<script>
import { validateEmail } from '@/utils/validation'

export default {
  data() {
    return {
      username: '',
      password: '',
      logMessage: '',
    }
  },
  computed: {
    isUsernameValid() {
      return validateEmail(this.username)
    },
  },
  methods: {
    async submitForm() {
      try {
        const userData = {
          username: this.username,
          password: this.password,
        }
        await this.$store.dispatch('LOGIN', userData)
        this.$router.push('/main')
      } catch (error) {
        console.log(error.response.data)
        this.logMessage = error.response.data
      } finally {
        this.initForm()
      }
    },
    initForm() {
      this.username = ''
      this.password = ''
    },
  },
}
</script>
