<template>
  <router-link
    v-slot="{ href, route, navigate, isActive, isExactActive }"
    :to="to"
  >
    <a
      :href="href"
      class="flex items-center px-4 py-2 leading-relaxed text-center border-b-2 hover:bg-gray-300
      focus:outline-none transition duration-150 rounded-t-lg font-medium"
      :class="{
        'text-blue-500 border-blue-500 bg-gray-200': isExactActive,
        'text-gray-700 border-transparent': !isExactActive,
      }"
      @click="navigate"
    >
      <Icon
        v-if="icon"
        :name="icon"
        size="xl"
        class="mr-2 transition duration-150"
        :class="{
          'text-gray-600': !isExactActive,
          'text-blue-600': isExactActive,
        }"
      />
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
    icon: {
      type: String,
      default: null,
    },
  },
};
</script>
