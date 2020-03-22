<template>
  <ViewWrapper>
    <!-- $route.params.role === 'teacher' -->
    <TeacherDashboard v-if="true" />
    <!-- $route.params.role === 'student' -->
    <StudentDashboard v-if="false" />
  </ViewWrapper>
</template>

<script>
import StudentDashboard from '../components/student/StudentDashboard.vue';
import TeacherDashboard from '../components/teacher/TeacherDashboard.vue';

export default {
  name: 'Dashboard',
  components: { TeacherDashboard, StudentDashboard },
};
</script>
