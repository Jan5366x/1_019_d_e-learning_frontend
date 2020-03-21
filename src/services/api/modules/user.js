import api from '../config/index';

export default {
  getData(id) {
    return api.GET(`user/${id}`);
  },
};
