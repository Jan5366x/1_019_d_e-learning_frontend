import { authentication, user } from '../services/api';
import { ACCESS_TOKEN } from '../config/localStorageVariables';

export default {
  data() {
    return {
      token: '312zi36781264798236478123678326',
      user: {
        firstname: 'Vorname',
        name: 'Nachname',
        role: 'student',
      },
    };
  },

  created() {
    this.reAuthenticate();
  },

  watch: {
    $route: {
      immediate: true,
      handler(to, from) {
        if (
          (to.meta.authRequired && this.token)
          && (to.meta.role !== 'all' && to.meta.role !== this.user.role)
        ) {
          this.$router.push(from?.path || '/home');
        } else if (!to.meta.authRequired && this.token) {
          this.$router.push('/home');
        } else if (to.meta.authRequired && !this.token) {
          this.$router.push('/login');
        } else {
          // Go To Route
        }
      },
    },
  },

  methods: {
    login(email, password) {
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
    signup({ email, password, username, firstname, name }) {
      authentication.signup({
        email, password, username, firstname, name,
      }).then(() => {
        this.$ui.dialog.alert({
          title: this.$t('signupWasSuccessful'),
          message: this.$t('goToLoginAndLoginWithYourData'),
          confirmText: this.$t('signInNow'),
          onConfirm: () => {
            this.$router.push('/login');
          },
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
      } else if (this.$route.meta.authRequired) {
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
