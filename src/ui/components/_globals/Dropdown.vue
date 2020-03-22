<template>
  <div
    id="dropdown"
    x-component="Dropdown"
    class="relative inline-block"
  >
    <div @click="open">
      <slot name="trigger" />
    </div>

    <div
      v-if="isOpen"
      class="fixed inset-0 left-0 top-0 w-full h-screen"
      tabindex="-1"
      @click="close"
    />

    <transition
      enter-class="opacity-0 scale-90"
      enter-active-class="transition-all ease-out duration-150"
      enter-to-class="opacity-100 scale-100"
      leave-class="opacity-100 scale-100"
      leave-active-class="transition-all ease-in duration-150"
      leave-to-class="opacity-0 scale-90"
    >
      <div
        v-show="isOpen"
        class="transform mt-2 absolute right-0 z-10 origin-top-right text-left"
      >
        <div class="w-64 bg-white rounded-lg shadow-lg overflow-hidden" @click.stop="close">
          <div class="py-1">
            <slot />
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
    };
  },

  methods: {
    open() {
      this.isOpen = true;
    },
    close() {
      this.isOpen = false;
    },
  },
};
</script>
