<template>
  <ViewWrapper>
    <Headline1> {{ $t('teacher_room') }} </Headline1>
    <Tabs>
    </Tabs>
  </ViewWrapper>
</template>

<script>
import Tabs from '../../components/_globals/Tabs/Tabs.vue';
import Headline1 from '../../components/_globals/Typography/Headline1.vue';

export default {
  name: 'TeachersRoom',
  components: { Headline1, Tabs },
};
</script>
