<template>
  <div
    v-if="doc"
    class="prose"
  >
    <h1>{{ doc.title }}</h1>

    <nuxt-content :document="doc" />
  </div>
</template>

<script>
export default {
  name: 'Documentation',

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
  .prose {
    @apply max-w-none;
  }
</style>
