<template>
  <section>
    <router-view />

    <div class="grid grid-cols-1 grid-cols-1 md:grid-cols-2 md:grid-cols-3 gap-4">
      <TeacherCourses :teacher="{}" class="col col-span-2" />
      <Card class="col col col-span-1">
        <Headline2>
          {{ $t('reminder') }}
        </Headline2>
      </Card>
    </div>
  </section>
</template>

<script>
import TeacherCourses from '../../../components/course/TeacherCourses.vue';

export default {
  name: 'Courses',

  components: {
    TeacherCourses,
  },
};
</script>
