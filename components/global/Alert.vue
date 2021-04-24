<template>
  <div :class="[ 'alert', style ]">
    <div
      v-if="title"
      class="title"
    >
      {{ title }}
    </div>

    <slot />
  </div>
</template>

<script>
export default {
  name: 'Alert',

  props: {
    type: {
      type: String,
      default: 'tip'
    },
    title: {
      type: String,
      default: ''
    }
  },

  computed: {
    style() {
      // using `alert-{this.type}` would not work with Tailwind purge
      const map = {
        tip: 'alert-tip',
        info: 'alert-info',
        warning: 'alert-warning',
        danger: 'alert-danger'
      };

      return map[this.type];
    }
  }
};
</script>

<style lang="scss" scoped>
.alert {
  @apply my-4;
  @apply py-4;
  @apply px-6;
  @apply border-l-4;
  @apply rounded;
  @apply shadow;
  @apply font-light;

  .title {
    @apply mb-2;
    @apply font-bold;
  }

  &-tip,
  &-tip a {
    @apply border-green-300;
    @apply bg-green-50;
    @apply text-green-800;
  }

  &-danger,
  &-danger a {
    @apply border-red-300;
    @apply bg-red-50;
    @apply text-red-800;
  }

  &-warning,
  &-warning a {
    @apply border-yellow-300;
    @apply bg-yellow-50;
    @apply text-yellow-800;
  }
}
</style>
