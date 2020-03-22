<template>
  <div class="bg-white shadow">
    <div class="container-default mx-auto px-2 sm:px-6 pt-6">
      <div class="flex justify-between w-full">
        <slot />
        <slot name="right" />
      </div>
      <div v-if="$slots.bottom" class="pt-4">
        <slot name="bottom" />
      </div>
      <div v-else class="mb-6" />
    </div>
  </div>
</template>
