<template>
  <div class="content">
    <Sidebar />

    <div class="document">
      <div
        v-if="doc"
        class="prose"
      >
        <h1 v-if="doc.title">{{ doc.title }}</h1>

        <nuxt-content :document="doc" />
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from '~/components/layout/Sidebar.vue';

export default {
  name: 'Documentation',

  components: {
    Sidebar
  },

  async middleware({ $content, params, redirect }) {
    if (!params.version) {
      const { defaultVersion } = await $content('docs/settings').only(['defaultVersion']).fetch();
      redirect(`/docs/${defaultVersion}/index`);
    }

    if (!params.pathMatch) {
      return redirect(`/docs/${params.version}/index`);
    }
  },

  data() {
    return {
      doc: null
    };
  },

  async fetch() {
    this.doc = await this.$content(`docs/${this.version}/${this.slug}`).fetch();
  },

  head() {
    return {
      title: this.doc?.title || this.slug
    };
  },

  computed: {
    version() {
      return this.$route.params.version;
    },

    slug() {
      return this.$route.params.pathMatch;
    }
  }
};
</script>

<style lang="scss" scoped>
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

  .prose {
    @apply max-w-5xl;
  }
</style>
