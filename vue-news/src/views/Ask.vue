<template>
  <section class="ask">
    <ListItem />
  </section>
</template>

<script>
import ListItem from '@/components/ListItem'
import ListMixin from '@/mixins/ListMixin'
// import bus from '@/utils/bus'

export default {
  components: {
    ListItem,
  },
  mixins: [ListMixin]
}
</script>