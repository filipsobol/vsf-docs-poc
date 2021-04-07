<template>
  <div class="wrapper">
    <Header />

    <div class="body">
      <Nuxt />
    </div>

    <Footer />
  </div>
</template>

<script>
import Footer from '~/components/layout/Footer.vue';
import Header from '~/components/layout/Header.vue';

export default {
  components: {
    Footer,
    Header
  }
};
</script>

<style lang="scss" scoped>
  .wrapper {
    @apply flex;
    @apply flex-col;
    @apply min-h-screen;
  }

  .body {
    @apply flex-grow;
  }
</style>
