<template>
  <div class="main-container">
    <Main />
    <b-loading :active.sync="loading" />
  </div>
</template>

<script>
import Main from '~/components/layout/Main.vue'
export default {
  name: 'Home',
  components: { Main },

  data: () => ({
    loading: false,
  }),
}
</script>
<style lang="scss" scoped>
.main-container {
  height: 100%;
}
</style>
