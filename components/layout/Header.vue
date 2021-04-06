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
          @select="switchVersion($event)"
        />
      </div>
    </div>
  </header>
</template>

<script>
import SearchIcon from '~/components/icons/Search.vue';
import Select from '~/components/global/Select.vue';

export default {
  name: 'Header',

  components: {
    SearchIcon,
    Select
  },

  data() {
    return {
      searchHotkey: '/',
      versions: [
        { label: 'master', value: 'master' },
        { label: 'v2.3', value: '2.3' }
      ]
    };
  },

  computed: {
    version() {
      return this.$route.params.version;
    },

    slug() {
      return this.$route.params.pathMatch;
    }
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
  },

  methods: {
    switchVersion(version) {
      return this.$router.push({ path: `/docs/${version}` });
    }
  }
};
</script>

<style lang="scss" scoped>
  .header {
    @apply sticky;
    @apply top-0;
    @apply py-3;
    @apply px-6;
    @apply border-b;
    @apply border-gray-100;
    @apply bg-white;
    @apply z-10;
  }

  .container {
    @apply w-full;
    @apply max-w-[92rem];
    @apply mx-auto;
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

    @screen xl {
      @apply px-6;
    }
  }

  .logo {
    @apply max-h-[32px];
  }

  .search {
    @apply flex;
    @apply relative;
    @apply w-1/2;
    @apply max-w-6xl;

    &-icon {
      @apply absolute;
      @apply left-3;
      @apply top-2;
    }

    input {
      @apply w-full;
      @apply h-10;
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
    @apply top-[5px];
    @apply right-2;
    @apply pb-[2px];
    @apply px-2;
    @apply rounded;
    @apply bg-gray-200;
    @apply border;
    @apply border-gray-300;
    @apply select-none;

    @screen lg {
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
