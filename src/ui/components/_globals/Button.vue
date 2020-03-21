<template>
  <button
    v-if="!to && !href"
    ref="button"
    x-component="Button"
    class="inline-flex px-3 rounded-lg font-medium duration-200 transition-all ease-in-out focus:outline-none
    items-center justify-center tap-color-transparent select-none focus:shadow-outline"
    :class="classes"
    :type="type"
    @click="onClick"
    @mouseenter="$emit('mouseeenter')"
    @mouseout="$emit('mouseout')"
  >
    <slot v-if="!loading" />
    <div v-else class="w-16">
      <LoadingDots />
    </div>
  </button>
  <a
    v-else-if="!to && href"
    ref="button"
    :href="href"
    :target="target"
    x-component="Button"
    class="inline-flex px-3 rounded-lg font-medium duration-200 transition-all ease-in-out focus:outline-none
    items-center justify-center tap-color-transparent select-none focus:shadow-outline"
    :class="classes"
    :type="type"
    @click="onClick"
    @mouseenter="$emit('mouseeenter')"
    @mouseout="$emit('mouseout')"
  >
    <slot v-if="!loading" />
    <div v-else class="w-16">
      <LoadingDots />
    </div>
  </a>
  <router-link
    v-else
    ref="button"
    x-component="Button"
    :to="to"
    class="inline-flex px-3 rounded-lg font-medium duration-200 transition-all ease-in-out active:outline-none
    items-center justify-center tap-color-transparent select-none focus:shadow-outline"
    :class="classes"
    @click="onClick"
    @mouseenter="$emit('mouseeenter')"
    @mouseout="$emit('mouseout')"
  >
    <slot v-if="!loading" />
    <div v-else class="w-16">
      <LoadingDots />
    </div>
  </router-link>
</template>

<script>
/* eslint-disable max-len */

export default {
  props: {
    theme: {
      type: String,
      default: 'tertiary',
      validator: (value) => ['primary', 'secondary', 'tertiary', 'alert'].indexOf(value) !== -1,
    },
    type: {
      type: String,
      default: 'button',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false,
    },
    flat: {
      type: Boolean,
      default: false,
    },
    to: {
      type: String,
      default: null,
    },
    href: {
      type: String,
      default: null,
    },
    target: {
      type: String,
      default: null,
    },
    minWidth: {
      type: Boolean,
      default: true,
    },
  },

  computed: {
    classes() {
      return {
        'bg-black py-2 text-white hover:bg-gray-600 active:bg-gray-700': this.theme === 'primary' && !this.disabled,
        'bg-gray-300 py-2 text-gray-800 hover:bg-gray-400 hover:text-gray-900 active:bg-gray-500': this.theme === 'secondary' && !this.disabled,
        'bg-transparent border border-gray-400 padding-y hover:bg-gray-200 active:bg-gray-300 active:text-gray-900': this.theme === 'tertiary' && !this.disabled,
        'bg-red-200 py-2 text-red-700 hover:text-red-900 active:bg-red-300': this.theme === 'alert' && !this.disabled,
        'bg-gray-300 py-2 text-gray-500 cursor-not-allowed': this.disabled,
        'shadow-sm active:shadow-none': !this.flat,
        '': this.minWidth,
        'cursor-wait': this.loading,
      };
    },
  },

  methods: {
    onClick(e) {
      if (!this.loading && !this.disabled) {
        this.$emit('click', e);
        this.$refs.button.blur();
      }
    },
  },
};
</script>

<style lang="scss">
.padding-y {
  padding-top: 0.4375rem;
  padding-bottom: 0.4375rem;
}
</style>
