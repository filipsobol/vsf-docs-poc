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

        <li class="header">
          <a
            href="https://www.notion.so/vuestorefront/Vue-Storefront-2-Next-High-level-Roadmap-201cf06abb314b84ad01b7b8463c0437"
            target="_blank"
            rel="nofollow noreferrer noopener"
          >
            <span class="icon"><GitHubIcon :size="20" /></span>
            <span clsas="title">GitHub</span>
          </a>
        </li>

        <Category
          v-for="category in categoryTree"
          :key="category.name"
          :name="category.name"
          :elements="category.elements"
        />
      </ul>
    </nav>
  </aside>
</template>

<script>
import Category from '~/components/layout/Category.vue';
import GitHubIcon from '~/components/icons/GitHub.vue';
import MapIcon from '~/components/icons/Map.vue';
import PackageIcon from '~/components/icons/Package.vue';
import PlayIcon from '~/components/icons/Play.vue';

export default {
  name: 'Sidebar',

  components: {
    Category,
    GitHubIcon,
    MapIcon,
    PackageIcon,
    PlayIcon
  },

  data() {
    return {
      articles: null,
      categories: null,
      versions: [
        { label: 'master', value: 'master' },
        { label: 'v2.3', value: '2.3' }
      ]
    };
  },

  async fetch() {
    await this.updateArticles();
    await this.updateCategories();
  },

  computed: {
    path() {
      return `docs/${this.$route.params.version}`;
    },

    categoryTree() {
      const categories = this.categories?.map(name => ({ name, elements: [] }));

      return this.articles?.reduce((carry, article) => {
        const categoryIndex = carry.findIndex(c => c.name === article.category);

        if (categoryIndex >= 0) {
          carry[categoryIndex].elements.push(article);
        }

        return carry;
      }, categories);
    }
  },

  watch: {
    '$route.params.version'() {
      this.updateCategories();
    }
  },

  methods: {
    async updateArticles() {
      this.articles = await this
        .$content(this.path, { deep: true })
        .only(['category', 'position', 'path', 'title'])
        .sortBy('position')
        .fetch();
    },

    async updateCategories() {
      const { categories } = await this.$content(`${this.path}/settings`).fetch();
      this.categories = categories;
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
