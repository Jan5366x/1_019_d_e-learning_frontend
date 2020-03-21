<template>
  <label
    v-if="forId"
    x-component="LabelText"
    :for="forId"
    class="text-xs font-medium tracking-wide text-gray-700 block ml-px mb-px select-none"
    :class="{
      'cursor-not-allowed': disabled,
    }"
  >
    <slot /><span v-if="required">*</span>
  </label>
  <div
    v-else
    x-component="LabelText"
    class="text-xs font-medium tracking-wide text-gray-700 block ml-px mb-px select-none"
  >
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
    forId: {
      type: String,
      default: null,
    },
    required: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
