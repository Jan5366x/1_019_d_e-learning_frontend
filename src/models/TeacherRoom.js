export default {
  data() {
    return {
      timetable: [],
    };
  },

  methods: {
    getLessonsForWeek() {
      const start = this.$moment().startOf('isoWeek').format('YYYY-MM-DD');
      const end = this.$moment().endOf('isoWeek').format('YYYY-MM-DD');
      console.log(start, end);
      this.timetable = {
        mo: [],

      };
    },
  },
};
