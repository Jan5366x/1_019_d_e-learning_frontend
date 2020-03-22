<template>
  <section class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
    <TeacherSubjectOverview
      v-for="subject of Subjects.subjects"
      :key="subject"
      :teacher="teacher"
      :subject="subject"
    />
  </section>
</template>

<script>
import TeacherSubjectOverview from '../teacher/TeacherSubjectOverview.vue';
import Subjects from '../../../models/course/subject/Subjects';

export default {
  name: 'TeacherCourses',
  models: { Subjects },

  components: { TeacherSubjectOverview },

  props: {
    teacher: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>

</style>
