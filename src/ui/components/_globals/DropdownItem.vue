<template>
  <button
    v-if="!to && !href"
    x-component="DropdownItem"
    :class="classes"
    draggable="false"
    @click="$emit('click')"
  >
    <Icon
      v-if="icon"
      :name="icon"
      :class="iconClasses"
      inline-flex
      size="xl"
      cursor="pointer"
    />
    <span><slot /></span>
  </button>
  <router-link
    v-else-if="to && !href"
    x-component="DropdownItem"
    :to="to"
    :class="classes"
    draggable="false"
    @click="$emit('click')"
  >
    <Icon
      v-if="icon"
      :name="icon"
      :class="iconClasses"
      inline-flex
      size="xl"
      cursor="pointer"
    />
    <span><slot /></span>
  </router-link>
  <a
    v-else
    x-component="DropdownItem"
    :href="href"
    :class="classes"
    draggable="false"
    target="_blank"
  >
    <Icon
      v-if="icon"
      :name="icon"
      :class="iconClasses"
      inline-flex
      size="xl"
      cursor="pointer"
    />
    <span><slot /></span>
  </a>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      default: null,
    },
    to: {
      type: String,
      default: null,
    },
    href: {
      type: String,
      default: null,
    },
    theme: {
      type: String,
      default: 'normal',
      validator: (val) => ['normal', 'alert'].indexOf(val) !== -1,
    },
  },

  computed: {
    classes() {
      return ['flex items-center w-full px-4 py-3 leading-tight focus:outline-none select-none', {
        'hover:bg-gray-200 active:bg-gray-300': this.theme === 'normal',
        'text-red-600 hover:bg-red-200 active:bg-red-300': this.theme === 'alert',
      }];
    },
    iconClasses() {
      return ['w-6 text-center mr-3', {
        'text-gray-600': this.theme === 'normal',
        'text-red-600': this.theme === 'alert',
      }];
    },
  },
};
</script>
