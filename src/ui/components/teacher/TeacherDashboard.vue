<template>
  <section>
    <Headline1 class="mb-4">{{ $t('dashboard') }}</Headline1>
    <div class="grid gap-4 grid-cols-1 md:grid-cols-2">
      <Card>
        <Headline2>{{ $t('teacher_dashboard.teachers_room') }}</Headline2>
        <div class="flex flex-col items-stretch justify-between">
          <Button to="/teachers_room/teach_room/" class="mt-4">
            <Icon class="mr-1 text-gray-800" name="play_circle_outline" size="xl" /> {{ $t('course') }}
          </Button>
          <Button to="/teachers_room/teach_room/" class="mt-4">
            <Icon class="mr-1 text-gray-800" name="chat" size="xl" /> {{ $t('teacher_room') }}
          </Button>
          <Button to="/teachers_room/timetable/" class="mt-4 mb-2">
            <Icon class="mr-1 text-gray-800" name="event" size="xl" /> {{ $t('timetable') }}
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

export default {
  name: 'TeacherDashboard',
  components: { Headline1, Headline2 },
};
</script>
