<template>
  <div id="app">
    <tool-bar></tool-bar>
    <transition name="page">
      <router-view />
    </transition>
    <Spinner :loading="loadingStatus" />
  </div>
</template>

<script>
import ToolBar from '@/components/ToolBar'
import Spinner from '@/components/Spinner'
import bus from '@/utils/bus.js'

export default {
  components: {
    ToolBar,
    Spinner
  },
  data() {
    return {
      loadingStatus: false,
    }
  },
  methods: {
    startSpinner() {
      this.loadingStatus = true
    },
    endSpinner() { 
      this.loadingStatus = false
    }
  },
  created() {
    bus.$on('start:spinner', this.startSpinner)
    bus.$on('end:spinner', this.endSpinner)
    console.log(process.env.VUE_APP_TITLE)
  },
  beforeDestroy() {
    bus.$off('start:spinner', this.startSpinner)
    bus.$off('end:spinner', this.endSpinner)
  } 
}
</script>

<style lang="scss">
@import '@/assets/scss/style';

/* Router Transition */
.page-enter-active, .page-leave-active {
  transition: all .5s;
}
.page-enter, .page-leave-to {
  opacity: 0;
}
</style>