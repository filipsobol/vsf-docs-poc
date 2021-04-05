<template>
  <div class="wrapper">
    <Header />

    <main class="content">
      <Sidebar class="sidebar" />
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
    @apply flex-grow;
    @apply flex;
    @apply flex-row;
    @apply w-full;
    @apply max-w-7xl;
    @apply mx-auto;
  }

  .sidebar {
    @apply fixed;
    @apply h-full;
    @apply bg-black;
    @apply bg-opacity-50;
    @apply w-96;
    @apply z-40;
    @apply inset-0;
    @apply hidden;

    @screen lg {
      @apply bg-white;
      @apply static;
      @apply h-auto;
      @apply overflow-y-visible;
      @apply pt-0;
      @apply block;
    }
  }

  .document {
    @apply m-8;
    @apply min-w-0;
    @apply w-full;

    @screen lg {
      @apply static;
      @apply max-h-full;
      @apply overflow-visible;
    }
  }
</style>
