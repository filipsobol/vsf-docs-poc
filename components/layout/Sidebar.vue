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
          <a
            href="https://www.notion.so/vuestorefront/Vue-Storefront-2-Next-High-level-Roadmap-201cf06abb314b84ad01b7b8463c0437"
            target="_blank"
            rel="nofollow noreferrer noopener"
          >
            <span class="icon"><MapIcon :size="20" /></span>
            <span clsas="title">Roadmap</span>
          </a>
        </li>

        <li
          v-if="versions"
          class="parent"
        >
          <h5>Version</h5>

          <Select
            :items="versions"
            :selected="version"
            class="mx-1"
            @select="switchVersion($event)"
          />
        </li>

        <Category
          v-for="category in categories"
          :key="category.name"
          :name="category.name"
          :elements="category.items"
        />
      </ul>
    </nav>
  </aside>
</template>

<script>
import Category from '~/components/layout/Category.vue';
import Select from '~/components/global/Select.vue';
import MapIcon from '~/components/icons/Map.vue';
import PackageIcon from '~/components/icons/Package.vue';
import PlayIcon from '~/components/icons/Play.vue';

export default {
  name: 'Sidebar',

  components: {
    Category,
    Select,
    MapIcon,
    PackageIcon,
    PlayIcon
  },

  data() {
    return {
      categories: null,
      versions: null
    };
  },

  async fetch() {
    await this.updateVersions();
    await this.updateCategories();
  },

  computed: {
    version() {
      return this.$route.params.version;
    }
  },

  watch: {
    version() {
      this.updateCategories();
    }
  },

  methods: {
    async updateVersions() {
      const { versions } = await this.$content('docs/settings').only(['versions']).fetch();
      this.versions = versions;
    },

    async updateCategories() {
      const { categories } = await this.$content(`docs/${this.version}/settings`).fetch();
      this.categories = categories;
    },

    switchVersion(version) {
      return this.$router.push({ path: `/docs/${version}` });
    }
  }
};
</script>

<style lang="scss">
  .sidebar {
    @apply h-full;
    @apply bg-black;
    @apply bg-opacity-50;
    @apply z-40;
    @apply inset-0;
    @apply hidden;

    @screen lg {
      @apply sticky;
      @apply block;
      @apply top-10;
      @apply z-0;
      @apply w-96;
      @apply bg-transparent;
      @apply h-auto;
      @apply overflow-y-visible;
      @apply border-r;
      @apply border-gray-100;
    }

    nav {
      @apply mt-8;
      @apply mb-4;
      @apply mx-2;
    }

    .header {
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
      @apply py-2;
      @apply rounded;
      @apply text-gray-500;

      &:hover {
        @apply text-gray-900;
      }

      &.nuxt-link-exact-active {
        @apply bg-green-50;
        @apply text-green-600;

        &:hover {
          @apply text-green-900;
        }
      }
    }
  }
</style>
