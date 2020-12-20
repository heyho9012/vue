<template>
  <header>
    <h1>
      <router-link :to="isLogin ? '/main' : '/login'" class="logo"
        >johnro</router-link
      >
    </h1>
    <nav class="navigations">
      <template v-if="isLogin">
        <span>{{ $store.state.username }}</span>
        <a href="javascript:;" @click="logoutUser">logout</a>
      </template>
      <template v-else>
        <ul>
          <li><router-link to="/login">로그인</router-link></li>
          <li><router-link to="/signup">회원가입</router-link></li>
        </ul>
      </template>
    </nav>
  </header>
</template>

<script>
import { mapGetters } from 'vuex'
import { deleteCookie } from '@/utils/cookies'

export default {
  computed: {
    ...mapGetters(['isLogin']),
  },
  methods: {
    logoutUser() {
      this.$store.commit('clearUsername')
      this.$store.commit('clearToken')
      deleteCookie('til_auth')
      deleteCookie('til_user')
      this.$router.push('/login')
    },
  },
}
</script>
