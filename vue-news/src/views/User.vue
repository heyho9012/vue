<template>
  <section class="user">
    <UserProfile :info="userInfo">
      <h3 slot="username">{{ userInfo.id }}</h3>
      <template slot="time">Joined {{ userInfo.created }}</template>
      <template slot="karma">, {{ userInfo.karma }}</template>
    </UserProfile>
  </section>
</template>

<script>
import UserProfile from '@/components/UserProfile'

export default {
  components: {
    UserProfile,
  },
  computed: {
    userInfo() {
      return this.$store.state.user
    }
  },
  created() {
    const userName = this.$route.params.id
    this.$store.dispatch('FETCH_USER', userName)
  }
}
</script>