<template>
  <router-link
    v-slot="{ href, route, navigate, isActive, isExactActive }"
    :to="to"
  >
    <a
      :href="href"
      class="px-4 py-2 leading-relaxed text-center border-b-2 hover:bg-gray-300
      focus:outline-none transition duration-150 rounded-t-lg"
      :class="{
        'text-black border-black bg-gray-200': isExactActive,
        'text-gray-700 border-transparent': !isExactActive,
      }"
      @click="navigate"
    >
      <slot />
    </a>
  </router-link>
</template>

<script>
export default {
  name: 'TabItem',

  props: {
    to: {
      type: String,
      default: '',
    },
  },
};
</script>
