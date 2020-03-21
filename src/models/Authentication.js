export default {
  data() {
    return {
      token: null,
      user: null,
    };
  },

  created() {
    this.token = 'ey8327487adsdasjdhk23746ewd7asudjb<72483dhas';
    this.user = {
      firstName: 'Max',
      lastName: 'Mustermann',
      role: 'teacher',
    };
  },
};
