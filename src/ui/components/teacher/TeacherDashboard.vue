<template>
  <section>
    <Headline1>{{ $t('dashboard') }}</Headline1>
    <div class="grid grid-cols-1 md:grid-cols-2">
      <div>
        <Headline2>{{ $t('classroom') }}</Headline2>
      </div>
      <div>
        <Headline2>{{ $t('teacher_dashboard.teachers_room') }}</Headline2>
      </div>
    </div>
  </section>
</template>

<script>
import Headline2 from '../_globals/Typography/Headline2.vue';
import Headline1 from '../_globals/Typography/Headline1.vue';

export default {
  name: 'TeacherDashboard',
  components: { Headline1, Headline2 },
};
</script>

<style scoped>

</style>
