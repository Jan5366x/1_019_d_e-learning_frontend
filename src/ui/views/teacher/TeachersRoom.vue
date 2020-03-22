<template>
  <section>
    <HeadWrapper>
      <Headline1>{{ $t('teacher_room') }}</Headline1>
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
