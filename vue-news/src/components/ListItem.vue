<template>
  <ul class="list">
    <li v-for="item in listItems" :key="item.id">
      <div>
        <template v-if="item.domain">
          <a :href="item.url">{{ item.title }}</a>
        </template>
        <template v-else>
          <router-link :to="`/item/${item.id}`">{{ item.title }}</router-link>
        </template>
        <p>
          {{ item.points || 0 }} points by 
          <router-link 
            v-if="item.user"
            :to="`/user/${item.user}`">{{ item.user }}</router-link>
          <a :href="item.url" v-else>{{ item.domain }}</a>
          {{ item.time_ago }}
        </p>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  computed: {
    listItems() {
      return this.$store.state.list
    }
  },
}
</script>