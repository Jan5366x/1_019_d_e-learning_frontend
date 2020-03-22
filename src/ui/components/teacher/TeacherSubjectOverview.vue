<template>
  <Card>
    <Headline2>
      {{ subject }}
    </Headline2>
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
