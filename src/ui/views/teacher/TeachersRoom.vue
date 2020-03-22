<template>
  <ViewWrapper>
    <Headline1> {{ $t('teacher_room') }} </Headline1>
    <div>
      <router-view></router-view>
    </div>
  </ViewWrapper>
</template>

<script>
import Headline1 from '../../components/_globals/Typography/Headline1.vue';

export default {
  name: 'TeachersRoom',
  components: { Headline1 },
};
</script>
