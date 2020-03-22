<template>
  <div class="bg-white shadow">
    <div
      class="container-default mx-auto px-2 sm:px-6 pt-6"
      :class="{
        'pb-6': !$slots.bottom,
      }"
    >
      <div class="flex justify-between w-full">
        <slot />
        <slot name="right" />
      </div>
      <div
        :class="{
          'pt-4': $slots.bottom,
        }"
      >
        <slot name="bottom" />
      </div>
    </div>
  </div>
</template>
