<template>
  <header class="header">
    <router-link v-show="$route.name !== 'Main'" to="/main" class="to-home"
      >Home</router-link
    >
    <h1>todo application</h1>
  </header>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped></style>
