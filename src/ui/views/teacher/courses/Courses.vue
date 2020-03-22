<template>
  <section class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xlg:grid-cols-4 gap-4">
    <TeacherSubjectOverview :teacher="{}" subject="Mathe">
    </TeacherSubjectOverview>
    <TeacherSubjectOverview :teacher="{}" subject="Englisch">
    </TeacherSubjectOverview>
    <TeacherSubjectOverview :teacher="{}" subject="Deutsch">
    </TeacherSubjectOverview>
    <TeacherSubjectOverview :teacher="{}" subject="Chemie">
    </TeacherSubjectOverview>
    <router-view />
  </section>
</template>

<script>
import TeacherSubjectOverview from '../../../components/teacher/TeacherSubjectOverview.vue';

export default {
  name: 'Courses',
  components: { TeacherSubjectOverview },
};
</script>
