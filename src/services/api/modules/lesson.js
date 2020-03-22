import api from '../config/index';
import authHeader from '../config/authHeader';

export default {
  getAll({ _token }) {
    return api.GET('lesson', {
      ...authHeader(_token),
    });
  },
  getOneById({ id, _token }) {
    return api.GET(`lesson/oneById/${id}`, {
      ...authHeader(_token),
    });
  },
  getOneByTitle({ title, _token }) {
    return api.GET(`lesson/oneByTitle/${title}`, {
      ...authHeader(_token),
    });
  },
  create({ title, date, _token }) {
    return api.POST('lesson/create', {
      title,
      date,
      steps: [],
    }, {
      ...authHeader(_token),
    });
  },
  put({ id, title, date, steps, _token }) {
    return api.PUT(`lesson/${id}`, {
      title,
      date,
      steps,
    }, {
      ...authHeader(_token),
    });
  },
  delete({ id, _token }) {
    return api.DELETE(`lesson/${id}`, {
      ...authHeader(_token),
    });
  },
};
