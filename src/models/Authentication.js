import { authentication, user } from '../services/api';
import { ACCESS_TOKEN, UID } from '../config/localStorageVariables';

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
      return new Promise((res, rej) => {
        authentication.login({
          email,
          password,
        }).then((resp) => {
          this.token = resp.data.token;
          this.user = resp.data.user;
          localStorage.setItem(ACCESS_TOKEN, this.token);
          localStorage.setItem(UID, btoa(this.user));
          this.$router.push('/home');
          res(resp.data);
          // Todo: implement get user data => backend
          // this.getUserData(this.user._id).then(() => {
          //   this.$router.push('/home');
          // });
        }).catch((err) => {
          rej(err);
        });
      });
    },
    signup({ email, password, username, firstname, name }) {
      return new Promise((res, rej) => {
        authentication.signup({
          email, password, username, firstname, name,
        }).then(() => {
          res();
          this.$ui.dialog.alert({
            title: this.$t('signupWasSuccessful'),
            message: this.$t('goToLoginAndLoginWithYourData'),
            confirmText: this.$t('signInNow'),
            onConfirm: () => {
              this.$router.push('/login');
            },
          });
        }).catch((err) => {
          rej(err);
        });
      });
    },
    getUserData(id) {
      return new Promise((res) => {
        user.getData(id).then((user) => {
          this.user = user.data;
          res(user.data);
        });
      });
    },
    reAuthenticate() {
      // TODO: Check token expiring time
      const token = localStorage.getItem(ACCESS_TOKEN);
      const uid = atob(localStorage.getItem(UID));
      if (token) {
        this.token = token;
        this.user = uid;
        // Todo: implement get user data => backend
        // this.getUserData(uid);
      } else if (this.$route.meta.authRequired) {
        this.$router.push('/login');
      }
    },
    logout() {
      // TODO: Logout
      localStorage.removeItem(ACCESS_TOKEN);
      localStorage.removeItem(UID);
      this.token = null;
      this.user = null;
      this.$router.push('/login');
    },
  },
};
