<template>
  <div class="user-description">
    <slot name="username"></slot>
    <slot name="time"></slot>
    <slot name="karma"></slot>
  </div>
</template>

<script>

export default {
  props: {
    info: Object
  },
}
</script>