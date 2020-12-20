<template>
  <section class="app-contents">
    <h2>Sign up for your account</h2>
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
          <div
            class="warning"
            v-if="password.length > 1 && password.length < 8"
          >
            More than 8 characters.
          </div>
        </div>
        <div>
          <label for="nickname">nickname</label>
          <input
            type="text"
            id="nickname"
            placeholder="enter nickname"
            v-model="nickname"
          />
        </div>
        <button
          type="submit"
          :disabled="!isUsernameValid || !password || password.length < 8"
        >
          sign up
        </button>
      </form>
      <p class="log-message">{{ logMessage }}</p>
    </div>
  </section>
</template>

<script>
import { signupUser } from '@/api/auth'
import { validateEmail } from '@/utils/validation'

export default {
  data() {
    return {
      username: '',
      password: '',
      nickname: '',
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
      console.log('submit form')
      const userData = {
        username: this.username,
        password: this.password,
        nickname: this.nickname,
      }
      const response = await signupUser(userData)
      this.logMessage = `sign up complete! ${response.data.username}`
      this.initForm()
    },
    initForm() {
      this.username = ''
      this.password = ''
      this.nickname = ''
    },
  },
}
</script>
