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
          this.$router.push('/home');
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
      // TODO: Check token expiring time
      const token = localStorage.getItem(ACCESS_TOKEN, this.token);
      if (token) {
        this.token = token;
        this.getUserData();
      } else {
        this.$router.push('/login');
      }
    },
    logout() {
      // TODO: Logout
      localStorage.removeItem(ACCESS_TOKEN);
      this.token = null;
      this.user = null;
      this.$router.push('/login');
    },
  },
};
