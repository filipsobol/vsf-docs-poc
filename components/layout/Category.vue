<template>
  <li class="parent">
    <h5>{{ name }}</h5>

    <ul class="nested">
      <li
        v-for="element in elements"
        :key="element.path"
      >
        <NuxtLink :to="`/docs/${version}${element.path}`">{{ element.label }}</NuxtLink>
      </li>
    </ul>
  </li>
</template>

<script>
export default {
  name: 'Category',

  props: {
    name: {
      type: String,
      required: true
    },
    elements: {
      type: Array,
      required: true
    }
  },

  computed: {
    version() {
      return this.$route.params.version;
    }
  }
};
</script>
