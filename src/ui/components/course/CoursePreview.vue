<template>
  <section></section>
</template>

<script>
import Card from '../_globals/Card.vue';

export default {
  name: 'CoursePreview',
  components: [Card],
  props: {
    course: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>

</style>
