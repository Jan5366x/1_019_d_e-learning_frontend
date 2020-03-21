// node module imports
import Vue from 'vue';
import VueStates from '@sum.cumo/vue-states';
import moment from 'moment';
import VueI18n from 'vue-i18n';
import PortalVue from 'portal-vue';
import hotkeys from 'hotkeys-js';

// custom imports
import App from './App.vue';
import Application from './models/Application';
import Authentication from './models/Authentication';
import './registerServiceWorker';
import router from './router';
import languages from './services/language';
import './app.scss';
import GlobalComponents from './ui/components/_globals';

// Plugin init
Vue.use(VueStates);
Vue.use(PortalVue);
Vue.use(VueI18n);
Vue.use(GlobalComponents);

const i18n = new VueI18n({
  locale: 'de',
  fallbackLocale: 'de',
  messages: languages,
});

// Global Variables accessible via this.$XYZ
Vue.prototype.$moment = moment;
Vue.prototype.$hotkeys = hotkeys;

// Custom vue configs
Vue.config.productionTip = false;

new Vue({
  i18n,
  models: {
    Application,
    Authentication,
  },
  router,
  render: (h) => h(App),
}).$mount('#app');
