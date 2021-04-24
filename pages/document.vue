<template>
  <div class="document">
    <div
      v-if="doc"
      class="prose"
    >
      <h1
        v-if="doc.title"
        class="title"
      >
        {{ doc.title }}
      </h1>

      <nuxt-content :document="doc" />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'Documentation',

  layout: 'documentation',

  head() {
    return {
      title: this.doc?.title || this.slug
    };
  },

  computed: {
    ...mapState({
      doc: state => state.document.doc
    }),

    slug() {
      return this.$route.params.pathMatch;
    }
  }
};
</script>

<style lang="scss" scoped>
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
  @apply max-w-none;
}
</style>
