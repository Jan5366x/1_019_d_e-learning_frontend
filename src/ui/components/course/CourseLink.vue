<template>
  <router-link :to="to">
    <section>
      <slot></slot>
    </section>
  </router-link>
</template>

<script>
export default {
  name: 'CourseLink',
  props: {
    to: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>

</style>
