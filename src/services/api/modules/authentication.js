import api from '../config/index';

export default {
  login({
    email,
    password,
  }) {
    return api.POST('user/login', {
      email,
      password,
    });
  },
  signup({
    email,
    password,
    username,
    name,
    firstname,
    role,
  }) {
    return api.POST('user/signup', {
      email,
      password,
      username,
      name,
      firstname,
      role,
    });
  },
};
