<template>
  <section class="dashboard-wrapper flex flex-col content-center justify-center">
    <Headline1>
      {{ $t('dashboard.title') }}
    </Headline1>
    <div class="grid grid-cols-1 md:grid-cols-2">
      <div class="">
        <Headline2>
          {{ $t('dashboard.teachers_room') }}
        </Headline2>
      </div>
      <div class="">
        <Headline2>
          {{ $t('dashboard.students_room') }}
        </Headline2>
      </div>
    </div>
  </section>
</template>

<script>
import Headline1 from '../components/_globals/Typography/Headline1.vue';
import Headline2 from '../components/_globals/Typography/Headline2.vue';

export default {
  name: 'Dashboard',
  components: { Headline2, Headline1 },
};
</script>

<style scoped>
  .dashboard-wrapper {
    height: 100vh;
  }
</style>
