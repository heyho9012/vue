<template>
  <section class="item">
    <article class="user-container">
      <h2>{{ fetchedItem.title }}</h2>
      <UserProfile :info="fetchedItem">
        <p slot="username">{{ fetchedItem.points }}points by
          <router-link :to="`/user/${fetchedItem.user}`">{{ fetchedItem.user }}</router-link>
        </p>
        <template slot="time">Posted {{ fetchedItem.time_ago }}</template>
      </UserProfile>
      <div v-html="fetchedItem.content"></div>
    </article>
    <article class="comment-container"> 

    </article>
  </section>
</template>

<script>
import UserProfile from '@/components/UserProfile'
import { mapGetters } from 'vuex'

export default {
  components: {
    UserProfile,
  },
  computed: {
    ...mapGetters(['fetchedItem'])
  },
  created() {
    const itemId = this.$route.params.id
    this.$store.dispatch('FETCH_ITEM', itemId)
  }
}
</script>

<style>

</style>