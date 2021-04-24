<template>
  <div
    v-if="doc.toc.length > 0"
    ref="toc"
    class="toc"
  >
    <div class="content">
      <div class="header">On this page</div>

      <scrollactive
        :offset="0"
        highlight-first-item
        active-class="element-active"
        tag="ul"
      >
        <li
          v-for="{ depth, id, text } of doc.toc"
          :key="id"
        >
          <a
            :href="`#${id}`"
            :class="{
              'ml-0': depth === 2,
              'ml-4': depth === 3,
              'ml-8': depth === 4,
              'ml-10': depth === 5,
              'ml-12': depth === 6
            }"
            class="element scrollactive-item"
          >
            {{ text }}
          </a>
        </li>
      </scrollactive>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'TableOfContent',

  data: () => {
    return {
      activeSectionId: null,
      observer: null
    };
  },

  computed: {
    ...mapState({
      doc: state => state.document.doc
    })
  }
};
</script>

<style lang="scss" scoped>
.toc {
  @apply relative;
  @apply w-[30rem];
  @apply hidden;

  @screen lg {
    @apply flex;
    @apply flex-col;
  }
}

.content {
  @apply mt-8;
  @apply top-8;
  @apply sticky;
  @apply text-gray-500;
}

.header {
  @apply mb-4;
  @apply text-sm;
  @apply uppercase;
  @apply font-bold;
}

.element {
  @apply flex;
  @apply my-1;
  @apply py-1;
  @apply pl-2;
  @apply rounded;

  &:hover {
    @apply text-gray-900;
  }

  &-active {
    @apply text-green-500;
    @apply underline;

    &:hover {
      @apply text-green-700;
    }
  }
}
</style>
