<template>
  <section class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
    <TeacherSubjectOverview v-for="subject of data().subjects" :teacher="teacher" :subject="subject">
    </TeacherSubjectOverview>
  </section>
</template>

<script>
import TeacherSubjectOverview from '../teacher/TeacherSubjectOverview.vue';
import { subjects } from '../../../models/course/subject/Subjects';

export default {
  name: 'TeacherCourses',
  components: { TeacherSubjectOverview },
  props: {
    teacher: {
      type: Object,
      required: true,
    },
  },
  data: () => {
    return {
      subject: subjects,
    };
  },
};
</script>

<style scoped>

</style>
