<template>
  <div class="wrapper">
    <Header />

    <div class="body">
      <div class="content">
        <Sidebar />
        <Nuxt />
      </div>
    </div>

    <Footer />
  </div>
</template>

<script>
import Footer from '~/components/layout/Footer.vue';
import Header from '~/components/layout/Header.vue';
import Sidebar from '~/components/layout/Sidebar.vue';

export default {
  name: 'DocumentationLayout',

  components: {
    Footer,
    Header,
    Sidebar
  },

  middleware: 'docs'
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

  .content {
    @apply relative;
    @apply flex-grow;
    @apply flex;
    @apply flex-row;
    @apply w-full;
    @apply max-w-[92rem];
    @apply mx-auto;
  }
</style>
