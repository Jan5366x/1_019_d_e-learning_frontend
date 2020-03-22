<template>
  <section class="grid grid-cols-1 grid-cols-1 md:grid-cols-2 md:grid-cols-3 gap-4">
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xlg:grid-cols-4 gap-4">
      <TeacherCourses :teacher="{}" class="col col-span-2" />
    </div>
    <router-view />
  </section>
</template>

<script>
import TeacherCourses from '../../../components/course/TeacherCourses.vue';

export default {
  name: 'Courses',
  components: { TeacherCourses },
};
</script>
