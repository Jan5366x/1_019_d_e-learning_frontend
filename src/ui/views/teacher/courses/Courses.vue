<template>
  <section>
    <router-view />

    <div class="grid grid-cols-1 grid-cols-1 md:grid-cols-2 md:grid-cols-3 gap-4">
      <TeacherCourses :teacher="{}" class="col col-span-2" />
      <hr class="block sm:hidden">
      <div class="col col-span-2 sm:col-span-1">
        <Card>
          <Headline2>
            {{ $t('reminder') }}
          </Headline2>
        </Card>
      </div>
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
