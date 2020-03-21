<template>
  <section>
    <TeacherDashboard v-if="$route.params.role === 'teacher'">
    </TeacherDashboard>
    <StudentDashboard v-if="$route.params.role === 'student'">
    </StudentDashboard>
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
