import api from '../config/index';
import authHeader from '../config/authHeader';
import coursesData from '../../courses/subject';
import courseData from '../../course/subject';

export default {
  getAll({ _token }) {
    return api.GET('course', {
      ...authHeader(_token),
    });
  },
  getOneById({ id, _token }) {
    return api.GET(`course/oneById/${id}`, {
      ...authHeader(_token),
    });
  },
  getOneByName({ title, _token }) {
    return api.GET(`course/oneByName/${title}`, {
      ...authHeader(_token),
    });
  },
  create({ name, subject, _token }) {
    return api.POST('course/create', {
      name,
      subject,
      lessons: [],
      students: [],
      classes: [],
    }, {
      ...authHeader(_token),
    });
  },
  put({
    id,
    name,
    subject,
    lessons,
    students,
    classes,
    _token,
  }) {
    return api.PUT(`course/${id}`, {
      name,
      subject,
      lessons,
      students,
      classes,
    }, {
      ...authHeader(_token),
    });
  },
  delete({ id, _token }) {
    return api.DELETE(`course/${id}`, {
      ...authHeader(_token),
    });
  },
  getById(id) {
    return courseData;
  },
  get() {
    return coursesData;
  },
};
