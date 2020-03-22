<template>
  <section>
    <HeadWrapper>
      <Headline1>{{ $t('teachers_room') }}</Headline1>

      <template v-slot:bottom>
        <Tabs>
          <TabItem to="timetable" icon="event">{{ $t('timetable') }}</TabItem>
          <TabItem to="teach_room" icon="forum">{{ $t('teacher_room') }}</TabItem>
          <TabItem to="courses" icon="play_circle_outline">{{ $tc('course', 2) }}</TabItem>
        </Tabs>
      </template>
    </HeadWrapper>
    <ViewWrapper>
      <router-view />
    </ViewWrapper>
  </section>
</template>

<script>
export default {
  name: 'TeachersRoom',
};
</script>
