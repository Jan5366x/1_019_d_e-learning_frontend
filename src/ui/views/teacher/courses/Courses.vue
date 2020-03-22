<template>
  <section class="p-4">
    <Headline1>
      {{ $t('courses') }}
    </Headline1>

    <router-view />

    <div class="grid grid-cols-1 grid-cols-1 md:grid-cols-2 md:grid-cols-3">
      <TeacherCourses :teacher="{}" class="col col-span-2">
      </TeacherCourses>
      <Card class="col col col-span-1">
        <Headline2>
          {{ $t('reminder') }}
        </Headline2>
      </Card>
    </div>
  </section>
</template>

<script>
import Headline1 from '../../../components/_globals/Typography/Headline1.vue';
import Headline2 from '../../../components/_globals/Typography/Headline2.vue';
import Card from '../../../components/_globals/Card.vue';
import TeacherCourses from '../../../components/course/TeacherCourses.vue';

export default {
  name: 'Courses',
  components: { TeacherCourses, Headline2, Headline1, Card },
};
</script>
