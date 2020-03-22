import { course } from '../services/api/index';

export default {
  data() {
    return {};
  },
  methods: {
    getCourseById(id) {
      return course.getById(id);
    },
    getAll() {
      return course.get();
    },
  },
};
