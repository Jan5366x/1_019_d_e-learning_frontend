import touchdetector from '../utils/touchdetector.util';
import { osName } from '../utils/environment.util';

export default {
  data() {
    return {
      touch: touchdetector,
      os: osName(),
    };
  },

  watch: {
    touch: {
      immediate: true,
      handler(newVal) {
        const root = document.getElementsByTagName('html')[0];
        if (newVal) root.classList.add('touch-device');
        else root.classList.remove('touch-device');
      },
    },
  },
};
