<template>
  <div class="mb-4">
    <div class="flex h-2 -mx-1">
      <div :class="[classes, security >= 0 ? color : 'bg-gray-400']" />
      <div :class="[classes, security >= 1 ? color : 'bg-gray-400']" />
      <div :class="[classes, security >= 2 ? color : 'bg-gray-400']" />
      <div :class="[classes, security >= 3 ? color : 'bg-gray-400']" />
      <div :class="[classes, security === 4 ? color : 'bg-gray-400']" />
    </div>
    <div
      class="transition duration-150 overflow-hidden text-gray-700 text-xs ml-px mt-px"
      :class="{
        'h-5': security <= 1 && (password && password.length >= 6),
        'h-0': security > 1 || (!password || password.length < 6),
      }"
    >
      {{ $t('passwordIsInsecure') }}
    </div>
  </div>
</template>

<script>
import zxcvbn from 'zxcvbn';

export default {
  props: {
    value: {
      type: Number,
      default: 0,
    },
    password: {
      type: String,
      default: null,
    },
    showWarning: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      security: null,
    };
  },

  computed: {
    classes() {
      return 'h-2 flex-1 rounded-full shadow-xs mx-1 transition duration-150';
    },
    color() {
      if (this.password === null || this.password.length === 0) {
        return 'bg-gray-400';
      }
      return {
        'bg-red-500': this.security >= 0,
        'bg-orange-500': this.security >= 1,
        'bg-yellow-500': this.security >= 2,
        'bg-green-500': this.security >= 3,
        'bg-green-800': this.security >= 4,
      };
    },
  },

  watch: {
    password: {
      immediate: true,
      handler(newVal) {
        if (newVal) {
          this.security = zxcvbn(newVal).score;
          this.$emit('input', this.security);
        }
      },
    },
  },
};
</script>
