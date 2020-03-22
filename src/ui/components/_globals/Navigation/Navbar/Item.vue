<template>
  <router-link
    v-slot="{ href, route, navigate, isActive, isExactActive }"
    :to="to"
  >
    <a
      class="block sm:inline-block px-3 py-2 rounded-md text-base font-medium leading-5 text-white mr-2
      focus:outline-none focus:text-white transition duration-150 ease-in-out
      mb-1 sm:mb-0"
      :href="href"
      :class="{
        'bg-gray-900': isActive,
        'hover:bg-gray-700': !isExactActive,
      }"
      @click="navigate"
    >
      <slot />
    </a>
  </router-link>
</template>

<script>
export default {
  props: {
    to: {
      type: String,
      required: true,
    },
  },
};
</script>
