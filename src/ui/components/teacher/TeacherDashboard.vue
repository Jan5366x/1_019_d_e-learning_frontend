<template>
  <section>
    <Headline1>{{ $t('dashboard') }}</Headline1>
    <div class="grid grid-cols-1 md:grid-cols-2">
      <Card>
        <Headline2>{{ $t('teacher_dashboard.teachers_room') }}</Headline2>
        <div class="flex flex-col items-stretch justify-between">
          <Button class="mt-4">
            <Icon class="mr-1" name="play_circle_outline"></Icon> {{ $t('course') }}
          </Button>
          <Button class="mt-4">
            <Icon class="mr-1" name="chat"></Icon> {{ $t('teacher_room') }}
          </Button>
          <Button class="mt-4 mb-2">
            <Icon class="mr-1" name="event"></Icon> {{ $t('timetable') }}
          </Button>
        </div>
      </Card>
      <Card>
        <Headline2>{{ $t('teacher_dashboard.notifications.title') }}</Headline2>
      </Card>
    </div>
  </section>
</template>

<script>
import Headline2 from '../_globals/Typography/Headline2.vue';
import Headline1 from '../_globals/Typography/Headline1.vue';
import Card from '../_globals/Card.vue';

export default {
  name: 'TeacherDashboard',
  components: { Card, Headline1, Headline2 },
};
</script>

<style scoped>

</style>
