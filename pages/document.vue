<template>
  <div class="document">
    <div
      v-if="doc"
      class="prose"
    >
      <p class="update-time">Last updated {{ relativeTime }} ago</p>

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
import dayjs from 'dayjs';

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
    },

    relativeTime() {
      return dayjs().from(dayjs(this.doc.updatedAt), true);
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
    @apply max-w-5xl;
  }

  .update-time {
    @apply text-right;
    @apply mb-2;
    @apply text-gray-400;
  }
</style>
