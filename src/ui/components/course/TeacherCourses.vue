<template>
  <section class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
    <TeacherSubjectOverview
      v-for="subject of subjects"
      :key="subject"
      :teacher="teacher"
      :subject="subject"
    />
  </section>
</template>

<script>
import TeacherSubjectOverview from '../teacher/TeacherSubjectOverview.vue';
import subjects from '../../../services/api/_mock/subjects';

export default {
  name: 'TeacherCourses',

  components: { TeacherSubjectOverview },

  props: {
    teacher: {
      type: Object,
      required: true,
    },
  },

  data() {
    return {
      subjects,
    };
  },
};
</script>
