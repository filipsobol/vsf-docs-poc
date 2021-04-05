<template>
  <aside class="sidebar">
    <nav>
      <ul>
        <li class="header">
          <a
            href="https://vsf-next-demo.storefrontcloud.io/"
            target="_blank"
            rel="nofollow noreferrer noopener"
          >
            <span class="icon"><PlayIcon :size="20" /></span>
            <span clsas="title">Demo</span>
          </a>
        </li>

        <li class="header">
          <NuxtLink to="/">
            <span class="icon"><PackageIcon :size="20" /></span>
            <span clsas="title">Integrations</span>
          </NuxtLink>
        </li>

        <li class="header">
          <NuxtLink to="/">
            <span class="icon"><PullRequestIcon :size="20" /></span>
            <span clsas="title">Migration Guide</span>
          </NuxtLink>
        </li>

        <li class="header">
          <a
            href="https://www.notion.so/vuestorefront/Vue-Storefront-2-Next-High-level-Roadmap-201cf06abb314b84ad01b7b8463c0437"
            target="_blank"
            rel="nofollow noreferrer noopener"
          >
            <span class="icon"><MapIcon :size="20" /></span>
            <span clsas="title">Roadmap</span>
          </a>
        </li>

        <li class="parent">
          <h5>Getting started</h5>

          <ul class="nested">
            <Li><NuxtLink to="/docs/master/index">Introduction</NuxtLink></Li>
            <Li><NuxtLink to="/">Installation</NuxtLink></Li>
            <Li><NuxtLink to="/docs/master/key-concepts">Key concepts</NuxtLink></Li>
            <Li><NuxtLink to="/">Enterprise</NuxtLink></Li>
          </ul>
        </li>

        <li class="parent">
          <h5>Guides</h5>

          <ul class="nested">
            <li><NuxtLink to="/">Theme</NuxtLink></li>
            <li><NuxtLink to="/">Configuration</NuxtLink></li>
            <li><NuxtLink to="/">Composables</NuxtLink></li>
            <li><NuxtLink to="/">Product Catalog</NuxtLink></li>
            <li><NuxtLink to="/">Authentication</NuxtLink></li>
            <li><NuxtLink to="/">User profile</NuxtLink></li>
            <li><NuxtLink to="/">Cart and Wishlist</NuxtLink></li>
            <li><NuxtLink to="/">Checkout</NuxtLink></li>
          </ul>
        </li>

        <li class="parent">
          <h5>Advanced</h5>

          <ul class="nested">
            <li><NuxtLink to="/">Architecture</NuxtLink></li>
            <li><NuxtLink to="/">Application Context</NuxtLink></li>
            <li><NuxtLink to="/">Calling Platform API</NuxtLink></li>
            <li><NuxtLink to="/">Server Middleware</NuxtLink></li>
            <li><NuxtLink to="/">Interenationalization</NuxtLink></li>
            <li><NuxtLink to="/">Performance</NuxtLink></li>
            <li><NuxtLink to="/">SSR Cache</NuxtLink></li>
            <li><NuxtLink to="/">Logging</NuxtLink></li>
          </ul>
        </li>
      </ul>
    </nav>
  </aside>
</template>

<script>
import MapIcon from '~/components/icons/Map.vue';
import PackageIcon from '~/components/icons/Package.vue';
import PlayIcon from '~/components/icons/Play.vue';
import PullRequestIcon from '~/components/icons/PullRequest.vue';

export default {
  name: 'Sidebar',

  components: {
    MapIcon,
    PackageIcon,
    PlayIcon,
    PullRequestIcon
  }
};
</script>

<style lang="scss" scoped>
  .sidebar {
    @apply border-r;
    @apply border-gray-100;
  }

  nav {
    @apply m-4;
    @apply mt-8;
  }

  .header {
    & + & {
      @apply mt-1;
    }

    a {
      @apply flex;
      @apply items-center;

      .icon {
        @apply text-green-500;
        @apply rounded-lg;

        svg {
          fill: theme('colors.blue.100');
          stroke: theme('colors.blue.300');
        }
      }

      & > * + * {
        @apply ml-2;
      }
    }
  }

  h5 {
    @apply mt-8;
    @apply mb-2;
    @apply px-4;
    @apply text-xs;
    @apply font-bold;
    @apply uppercase;
  }

  a {
    @apply block;
    @apply px-4;
    @apply py-1;
    @apply rounded;
    @apply text-gray-500;

    &.nuxt-link-exact-active {
      @apply bg-green-50;
      @apply text-green-600;
    }
  }
</style>
