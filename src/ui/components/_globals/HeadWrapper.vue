<template>
  <div class="bg-white shadow">
    <div
      class="container-default mx-auto px-4 sm:px-6 xxl:px-8 pt-6"
      :class="{
        'pb-6': !$slots.bottom,
      }"
    >
      <div class="flex justify-between w-full">
        <div>
          <slot />
        </div>
        <div>
          <slot name="right" />
        </div>
      </div>
      <div
        class="inline-flex items-center"
        :class="{
          'pt-4': $slots.bottom,
        }"
      >
        <slot name="bottom" />
      </div>
    </div>
  </div>
</template>
