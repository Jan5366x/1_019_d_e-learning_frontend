<template>
  <section class="rounded overflow-hidden shadow rounded-lg bg-white">
    <div
      v-if="$slots.header"
      class="border-b p-3 md:px-6 md:py-3"
    >
      <slot name="header" />
    </div>
    <div class="p-4 md:px-6 md:py-4">
      <slot />
    </div>
  </section>
</template>

<script>
export default {
  name: 'Card',
};
</script>
