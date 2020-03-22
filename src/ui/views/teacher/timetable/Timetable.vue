<template>
  <section>
    <div class="flex justify-between items-center mb-4">
      <Button @click="lastWeek">
        {{ $t('back') }}
      </Button>
      <div class="text-center font-semibold">
        <template v-if="currentWeek === selectedWeek.week">
          <div>{{ $t('currentWeek') }}</div>
        </template>
        <template v-else-if="currentWeek + 1 === selectedWeek.week">
          <div>{{ $t('nextWeek') }}</div>
        </template>
        <template v-else-if="currentWeek - 1 === selectedWeek.week">
          <div>{{ $t('lastWeek') }}</div>
        </template>
        <template v-else>
          <div>{{ $t('week', { n: selectedWeek.week }) }}</div>
        </template>
        <div class="text-xs text-gray-700 font-normal leading-tight">
          {{ $moment(selectedWeek.start).format($t('dateFormat')) }} –
          {{ $moment(selectedWeek.end).format($t('dateFormat')) }}
        </div>
      </div>
      <Button @click="nextWeek">
        {{ $t('goOn') }}
      </Button>
    </div>
    <div class="grid grid-cols-5 gap-4">
      <Card>
        <template v-slot:header>
          <div class="uppercase font-medium text-sm text-gray-800">{{ $t('monday') }}</div>
          <div class="text-xs font-medium text-gray-600">
            {{ $moment(selectedWeek.start).format($t('dateFormat')) }}
          </div>
        </template>
        <LessonCard to="/lesson/73482892174ssasd23" color="purple">
          Integralrechnung 1
          <template v-slot:course>Mathe LK 12</template>
        </LessonCard>
        <LessonCard to="/lesson/73482892174ssasd23" color="blue">
          Edelmetalle 1
          <template v-slot:course>Chemie 8b</template>
        </LessonCard>
        <LessonCard to="/lesson/73482892174ssasd23" color="blue">
          Edelmetalle 2
          <template v-slot:course>Chemie 8b</template>
        </LessonCard>
        <LessonCard to="/lesson/73482892174ssasd23" color="orange">
          Dreisatz 1
          <template v-slot:course>Mathe 5a</template>
        </LessonCard>
      </Card>
      <Card>
        <template v-slot:header>
          <div class="uppercase font-medium text-sm text-gray-800">{{ $t('tuesday') }}</div>
          <div class="text-xs font-medium text-gray-600">
            {{ $moment(selectedWeek.start).add(1, 'd').format($t('dateFormat')) }}
          </div>
        </template>
        <LessonCard to="/lesson/73482892174ssasd23" color="orange">
          Lineare Gleichungen 1
          <template v-slot:course>Mathe 10d</template>
        </LessonCard>
        <LessonCard to="/lesson/73482892174ssasd23" color="orange">
          Binomische Formeln 1
          <template v-slot:course>Mathe 8b</template>
        </LessonCard>
      </Card>
      <Card>
        <template v-slot:header>
          <div class="uppercase font-medium text-sm text-gray-800">{{ $t('wednesday') }}</div>
          <div class="text-xs font-medium text-gray-600">
            {{ $moment(selectedWeek.start).add(2, 'd').format($t('dateFormat')) }}
          </div>
        </template>
        <LessonCard to="/lesson/73482892174ssasd23" color="green">
          Kunststoffe
          <template v-slot:course>Chemie LK 12</template>
        </LessonCard>
        <LessonCard to="/lesson/73482892174ssasd23" color="green">
          Ethanol
          <template v-slot:course>Chemie GK 11</template>
        </LessonCard>
        <LessonCard to="/lesson/73482892174ssasd23" color="purple">
          Integralrechnung 2
          <template v-slot:course>Mathe LK 12</template>
        </LessonCard>
        <LessonCard to="/lesson/73482892174ssasd23" color="purple">
          Integralrechnung 3
          <template v-slot:course>Mathe LK 12</template>
        </LessonCard>
      </Card>
      <Card>
        <template v-slot:header>
          <div class="uppercase font-medium text-sm text-gray-800">{{ $t('thursday') }}</div>
          <div class="text-xs font-medium text-gray-600">
            {{ $moment(selectedWeek.start).add(3, 'd').format($t('dateFormat')) }}
          </div>
        </template>
        <LessonCard to="/lesson/73482892174ssasd23" color="purple">
          Stochastik 1
          <template v-slot:course>Mathe GK 11</template>
        </LessonCard>
        <LessonCard to="/lesson/73482892174ssasd23" color="orange">
          Binomische Formeln 2
          <template v-slot:course>Mathe 8b</template>
        </LessonCard>
        <LessonCard to="/lesson/73482892174ssasd23" color="orange">
          Binomische Formeln 3
          <template v-slot:course>Mathe 8b</template>
        </LessonCard>
      </Card>
      <Card>
        <template v-slot:header>
          <div class="uppercase font-medium text-sm text-gray-800">{{ $t('friday') }}</div>
          <div class="text-xs font-medium text-gray-600">
            {{ $moment(selectedWeek.start).add(4, 'd').format($t('dateFormat')) }}
          </div>
        </template>
        <LessonCard to="/lesson/73482892174ssasd23" color="purple">
          Stochastik 2
          <template v-slot:course>Mathe GK 11</template>
        </LessonCard>
        <LessonCard to="/lesson/73482892174ssasd23" color="green">
          Erdöl 1
          <template v-slot:course>Chemie LK 12</template>
        </LessonCard>
        <LessonCard to="/lesson/73482892174ssasd23" color="green">
          Erdöl 2
          <template v-slot:course>Chemie LK 12</template>
        </LessonCard>
        <LessonCard to="/lesson/73482892174ssasd23" color="purple">
          Integralrechnung 4
          <template v-slot:course>Mathe LK 12</template>
        </LessonCard>
      </Card>
    </div>
  </section>
</template>

<script>
import LessonCard from '../../../components/lesson/LessonCard.vue';

export default {
  name: 'Timetable',

  components: {
    LessonCard,
  },

  data() {
    return {
      selectedWeek: {
        week: 0,
        start: null,
        end: null,
        days: [],
      },
    };
  },

  computed: {
    currentWeek() {
      return this.$moment().isoWeek();
    },
  },

  created() {
    this.setCurrentWeek();
  },

  methods: {
    setCurrentWeek() {
      this.selectedWeek.week = this.$moment().isoWeek();
      this.selectedWeek.start = this.$moment().startOf('isoWeek').format('YYYY-MM-DD');
      this.selectedWeek.end = this.$moment().endOf('isoWeek').format('YYYY-MM-DD');
      // this.
    },
    lastWeek() {
      const newDate = this.$moment(this.selectedWeek.start).subtract(7, 'd').format('YYYY-MM-DD');
      this.selectedWeek.week = this.$moment(newDate).isoWeek();
      this.selectedWeek.start = this.$moment(newDate).startOf('isoWeek').format('YYYY-MM-DD');
      this.selectedWeek.end = this.$moment(newDate).endOf('isoWeek').format('YYYY-MM-DD');
    },
    nextWeek() {
      const newDate = this.$moment(this.selectedWeek.start).add(7, 'd').format('YYYY-MM-DD');
      this.selectedWeek.week = this.$moment(newDate).isoWeek();
      this.selectedWeek.start = this.$moment(newDate).startOf('isoWeek').format('YYYY-MM-DD');
      this.selectedWeek.end = this.$moment(newDate).endOf('isoWeek').format('YYYY-MM-DD');
    },
  },
};
</script>
