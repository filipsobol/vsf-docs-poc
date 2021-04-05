<template>
  <div class="wrapper">
    <nuxt-img
      v-bind="$attrs"
      :src="`/images/docs/${$attrs.src}`"
    />
  </div>
</template>

<script>
export default {
  name: 'DocImage'
};
</script>

<style lang="scss" scoped>
.wrapper {
  @apply flex;
  @apply w-full;
  @apply justify-center;
}
</style>
