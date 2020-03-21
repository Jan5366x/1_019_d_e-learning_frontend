import { authentication, user } from '../services/api';
import { ACCESS_TOKEN } from '../config/localStorageVariables';

export default {
  data() {
    return {
      token: null,
      user: null,
    };
  },

  created() {
    this.reAuthenticate();
  },

  methods: {
    login(email, password) {
      console.log(email, password);
      authentication.login({
        email,
        password,
      }).then((resp) => {
        this.token = resp.token;
        localStorage.setItem(ACCESS_TOKEN, this.token);
        this.getUserData().then(() => {
          this.$router.push('/');
        });
      });
    },
    getUserData() {
      return new Promise((res) => {
        user.getData(2).then((user) => {
          this.user = user.data;
          res(user.data);
        });
      });
    },
    reAuthenticate() {
      const token = localStorage.getItem(ACCESS_TOKEN, this.token);
      if (user) {
        this.token = token;
        this.getUserData().then(() => {
          const route = this.$route.path;
          if (route === '/login') this.$router.push('/');
          else this.$router.push(route);
        });
      }
    },
  },
};
