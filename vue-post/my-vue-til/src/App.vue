<template>
  <div id="app">
    <AppHeader />
    <RouterView />
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader'

export default {
  components: {
    AppHeader,
  },
}
</script>

<style lang="scss">
@import '@/assets/scss/main';
</style>
