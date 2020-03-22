<template>
  <div
    x-component="Modal"
    class="fixed flex justify-center items-center mt-0 lg:-mt-6 top-0 left-0 w-full h-screen"
    :class="{
      'invisible': !value,
      'visible': value,
    }"
  >
    <div class="flex flex-col w-full max-h-9/10">
      <div
        class="flex-grow mx-auto min-w-32 max-w-9/10 z-20 bg-white rounded-lg shadow transition-all ease-in duration-150
        overflow-x-hidden"
        :class="[{
          'opacity-0 transform scale-95 invisible': !value,
          'mt-0 visible': value,
        }, modalClass]"
      >
        <div
          v-if="$slots.header"
          class="sticky left-0 top-0 w-full backdrop-blur-light border-b"
          :class="{
            'px-4 pt-4 pb-3': padding,
          }"
        >
          <slot name="header" />
        </div>
        <div
          ref="innerContent"
          :class="[`${$slots.header ? 'pt-px' : ''} ${innerClass}`, {
            'p-4': padding,
          }]"
        >
          <slot />
        </div>
        <div
          v-if="$slots.footer"
          class="sticky flex justify-end left-0 bottom-0 w-full backdrop-blur-light border-t z-5"
          :class="{
            'px-4 pb-4 pt-3': padding,
          }"
        >
          <slot name="footer" />
        </div>
      </div>
    </div>
    <div
      class="fixed z-10 top-0 left-0 w-full h-screen bg-gray-900 transition-opacity ease-in duration-150 tap-color-transparent"
      :class="{
        'opacity-0 invisible': !value,
        'opacity-50 visible': value,
        'cursor-pointer': closeable,
      }"
      aria-hidden="true"
      @click="close"
    />
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Boolean,
      required: true,
    },
    closeable: {
      type: Boolean,
      default: true,
    },
    modalClass: {
      type: String,
      default: '',
    },
    innerClass: {
      type: String,
      default: '',
    },
    padding: {
      type: Boolean,
      default: true,
    },
    bodyOpenClass: {
      type: String,
      default: 'modal-open',
    },
  },

  computed: {
    paddingClass() {
      if (typeof this.padding === 'string') return this.padding;
      return `-${this.padding}`;
    },
  },

  watch: {
    value: {
      immediate: true,
      handler(newVal) {
        if (newVal) {
          document.body.classList.add(this.bodyOpenClass);
          this.$hotkeys('esc', (e) => {
            e.preventDefault();
            this.close();
          });
        } else {
          document.body.classList.remove(this.bodyOpenClass);
          this.$hotkeys.unbind('esc');
        }
      },
    },
  },

  methods: {
    close() {
      if (this.closeable) {
        this.$emit('input', false);
        this.$emit('close');
      }
    },
  },
};
</script>
