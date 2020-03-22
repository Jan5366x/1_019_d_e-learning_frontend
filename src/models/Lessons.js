import { lesson } from '../services/api';

export default {
  injectModels: ['Authentication'],

  data() {
    return {
      lessons: [],
    };
  },

  computed: {
    token() {
      return this.Authentication.token;
    },
  },

  methods: {
    create({ title, date }) {
      return new Promise((res) => {
        lesson.create({
          title,
          date,
          _token: this.token,
        }).then((resp) => {
          console.log(resp.data);
          res(resp.data);
        });
      });
    },
  },
};
