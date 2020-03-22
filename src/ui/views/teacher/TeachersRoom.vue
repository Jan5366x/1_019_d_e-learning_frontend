<template>
  <section>
    <HeadWrapper>
      <Headline1>{{ $t('teachers_room') }}</Headline1>

      <template v-slot:bottom>
        <Tabs>
          <TabItem to="timetable"> <Icon name="event"></Icon> {{ $t('timetable') }}</TabItem>
          <TabItem to="teach_room"> <Icon name="chat"></Icon> {{ $t('teacher_room') }}</TabItem>
          <TabItem to="courses"> <Icon name="play_circle_outline"></Icon> {{ $tc('course', 2) }}</TabItem>
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
