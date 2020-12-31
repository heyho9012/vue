<template>
  <div id="app">
    <AppHeader />
    <RouterView />
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from '@/components/header/AppHeader'
import AppFooter from '@/components/footer/AppFooter'

export default {
  components: {
    AppHeader,
    AppFooter,
  },
}
</script>

<style lang="scss">
@import 'assets/scss/main';
</style>
