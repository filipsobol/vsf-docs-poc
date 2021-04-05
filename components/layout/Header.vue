<template>
  <header class="header">
    <div class="container">
      <img
        src="https://camo.githubusercontent.com/48c886ac0703e3a46bc0ec963e20f126337229fc/68747470733a2f2f643968687267346d6e767a6f772e636c6f756466726f6e742e6e65742f7777772e76756573746f726566726f6e742e696f2f32383062313964302d6c6f676f2d76735f3062793032633062793032633030303030302e6a7067"
        alt="Vue Storefront logo"
        class="logo"
      >

      <div class="search">
        <SearchIcon
          :size="20"
          class="search-icon"
        />

        <input
          ref="searchInput"
          type="text"
          placeholder="Quick search"
        >

        <div class="hint">Press {{ searchHotkey }}</div>
      </div>

      <div class="side">
        <Select
          :items="versions"
          selected="master"
        />

        <a
          href="https://github.com/vuestorefront/vue-storefront/"
          target="_blank"
          rel="nofollow noreferrer noopener"
        >
          <GitHubIcon :size="20" />
        </a>
      </div>
    </div>
  </header>
</template>

<script>
import GitHubIcon from '~/components/icons/GitHub.vue';
import SearchIcon from '~/components/icons/Search.vue';
import Select from '~/components/global/Select.vue';

export default {
  name: 'Header',

  components: {
    GitHubIcon,
    SearchIcon,
    Select
  },

  data() {
    return {
      searchHotkey: '/',
      versions: [
        { label: 'master', value: 'master' },
        { label: 'v2.3', value: 'v2.3' }
      ]
    };
  },

  mounted() {
    window.addEventListener('keypress', (event) => {
      if (event.key !== this.searchHotkey) {
        return;
      }

      if (document.activeElement === this.$refs.searchInput) {
        return;
      }

      event.preventDefault();
      event.stopPropagation();

      this.$refs.searchInput.focus();
    });
  }
};
</script>

<style lang="scss" scoped>
  .header {
    @apply p-3;
    @apply border-b;
    @apply border-gray-100;
  }

  .container {
    @apply w-full;
    @apply max-w-7xl;
    @apply mx-auto;
    @apply px-6;
    @apply flex;
    @apply flex-row;
    @apply items-center;
    @apply justify-between;
    @apply text-gray-500;

    & > * + * {
      @apply ml-2 md:ml-8;
    }

    a {
      @apply hover:text-gray-900;
    }
  }

  .logo {
    @apply max-h-[36px];
  }

  .search {
    @apply flex;
    @apply relative;
    @apply w-1/2;
    @apply max-w-6xl;

    &-icon {
      @apply absolute;
      @apply left-3;
      @apply top-[7px];
    }

    input {
      @apply w-full;
      @apply h-full;
      @apply pl-12;
      @apply pr-24;
      @apply py-2;
      @apply bg-gray-100;
      @apply rounded;
      @apply focus:outline-none;
      @apply focus:ring;
    }
  }

  .hint {
    @apply hidden;
    @apply absolute;
    @apply top-[6px];
    @apply right-3;
    @apply pb-[2px];
    @apply px-2;
    @apply rounded;
    @apply bg-gray-200;
    @apply border;
    @apply border-gray-300;
    @apply select-none;

    @screen md {
      @apply block;
    }
  }

  .side {
    @apply flex;
    @apply items-center;
    @apply justify-between;

    & > * + * {
      @apply ml-4;
    }
  }
</style>
