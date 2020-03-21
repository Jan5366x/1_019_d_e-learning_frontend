import api from '../config/index';

export default {
  login({
    email,
    password,
  }) {
    // return api.POST('login', {
    //   email,
    //   password,
    // });
    console.log(email, password);
    return new Promise((res) => {
      res({
        token: 'QpwL5tke4Pnpja7X4',
      });
    });
  },
};
