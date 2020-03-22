<template>
  <section>
    <Headline1>{{ $t('dashboard') }}</Headline1>
    <div class="grid grid-cols-1 md:grid-cols-2">
      <Card>
        <Headline2>{{ $t('classroom') }}</Headline2>
        <div class="flex flex-col items-stretch justify-between">
          <Button class="mt-4">
            <Icon class="mr-1" name="play_circle_outline" /> {{ $t('course') }}
          </Button>
          <Button class="mt-4">
            <Icon class="mr-1" name="chat" /> {{ $t('teacher_room') }}
          </Button>
          <Button class="mt-4 mb-2">
            <Icon class="mr-1" name="event" /> {{ $t('timetable') }}
          </Button>
        </div>
      </Card>
      <Card>
        <Headline2>{{ $t('student_dashboard.open_tasks') }}</Headline2>
      </Card>
    </div>
  </section>
</template>

<script>
import Headline1 from '../_globals/Typography/Headline1.vue';
import Headline2 from '../_globals/Typography/Headline2.vue';
import Card from '../_globals/Card.vue';

export default {
  name: 'StudentDashboard',
  components: { Card, Headline1, Headline2 },
};
</script>

<style scoped>

</style>
