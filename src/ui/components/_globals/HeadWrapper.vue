<template>
  <div class="bg-white shadow">
    <div class="container-default mx-auto px-2 sm:px-6 py-6">
      <div class="flex justify-between w-full">
        <slot />
        <slot name="right" />
      </div>
    </div>
  </div>
</template>
