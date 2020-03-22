<template>
  <section>
    <HeadWrapper>
      <Headline1>{{ $t('teachers_room') }}</Headline1>

      <template v-slot:bottom>
        <Tabs>
          <TabItem to="files" icon="forum"> <Icon name="close"></Icon> {{ $t('teacher_room') }}</TabItem>
          <TabItem to="stream" icon="play_circle_outline">{{ $tc('course', 2) }}</TabItem>
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
  name: 'Course',
};
</script>

<style scoped>

</style>
