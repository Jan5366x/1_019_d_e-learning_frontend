<template>
  <Card>
    {{ subject }}
  </Card>
</template>

<script>
export default {
  name: 'TeacherSubjectOverview',
  props: {
    teacher: {
      type: Object,
      required: true,
    },
    subject: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>

</style>
