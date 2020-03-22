<template>
  <section class="p-4">
    <Headline1>
      {{ $t('courses') }}
    </Headline1>

    <div class="grid grid-cols-1 md:grid-cols-2">
      <div>
      </div>
      <div>
        <Headline2>
          {{ $t('reminder') }}
        </Headline2>
      </div>
    </div>

  </section>
</template>

<script>
import Headline1 from '../../../components/_globals/Typography/Headline1.vue';
import Headline2 from '../../../components/_globals/Typography/Headline2.vue';

export default {
  name: 'Courses',
  components: { Headline2, Headline1 },
};
</script>
