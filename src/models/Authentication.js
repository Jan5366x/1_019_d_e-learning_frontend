import { authentication, user } from '../services/api';
import { ACCESS_TOKEN, UID } from '../config/localStorageVariables';

export default {
  data() {
    return {
      token: null,
      user: null,
      requestedRoute: null,
    };
  },

  created() {
    this.reAuthenticate();
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
          this.user.role = 'teacher';
          localStorage.setItem(ACCESS_TOKEN, this.token);
          localStorage.setItem(UID, JSON.stringify(this.user));
          this.$router.push(`/dashboard_${this.user.role}`);
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
    signup({ email, password, username, firstname, name, role }) {
      return new Promise((res, rej) => {
        authentication.signup({
          email, password, username, firstname, name, role,
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
      if (token) {
        const uid = localStorage.getItem(UID);
        const user = JSON.parse(uid);
        this.token = token;
        this.user = user;
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
