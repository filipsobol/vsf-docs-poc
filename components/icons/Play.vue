<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="`${size}px`"
    :height="`${size}px`"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <polygon points="5 3 19 12 5 21 5 3" />
  </svg>
</template>

<script>
export default {
  name: 'PlayIcon',

  props: {
    size: {
      type: Number,
      default: 24
    }
  }
};
</script>
