<template>
  <div class="wrapper">
    <Header />

    <main class="content">
      <Sidebar />
      <Nuxt class="document" />
    </main>

    <Footer />
  </div>
</template>

<script>
import Footer from '~/components/layout/Footer.vue';
import Header from '~/components/layout/Header.vue';
import Sidebar from '~/components/layout/Sidebar.vue';

export default {
  components: {
    Footer,
    Header,
    Sidebar
  }
};
</script>

<style lang="scss" scoped>
  .wrapper {
    @apply flex;
    @apply flex-col;
    @apply min-h-screen;
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

  .document {
    @apply m-6;
    @apply min-w-0;
    @apply w-full;

    @screen lg {
      @apply m-8;
      @apply overflow-visible;
    }
  }
</style>
