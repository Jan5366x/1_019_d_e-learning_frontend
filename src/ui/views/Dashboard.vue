<template>
  <section>
    <HeadWrapper>
      <Headline1>{{ $t('dashboard') }}</Headline1>
    </HeadWrapper>
    <ViewWrapper>
      <!-- $route.params.role === 'teacher' -->
      <TeacherDashboard v-if="true" />
      <!-- $route.params.role === 'student' -->
      <StudentDashboard v-if="false" />
    </ViewWrapper>
  </section>
</template>

<script>
import StudentDashboard from '../components/student/StudentDashboard.vue';
import TeacherDashboard from '../components/teacher/TeacherDashboard.vue';

export default {
  name: 'Dashboard',
  components: { TeacherDashboard, StudentDashboard },
};
</script>
