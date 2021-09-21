<template>
  <main class="page-wrapper">
    <Header class="header" has-logout />
    <nuxt />
    <Footer />
  </main>
</template>

<script>
import Header from '~/components/layout/Header.vue'
import Footer from '~/components/layout/Footer.vue'

export default {
  components: { Header, Footer },
}
</script>

<style lang="scss" scoped>
.page-wrapper {
  width: 100%;
  min-height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>
