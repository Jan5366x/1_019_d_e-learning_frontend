<!-- eslint-disable vue/no-v-html -->
<template>
  <div x-component="Dialog" class="dialog-component relative z-40 select-none">
    <Modal
      :value="isActive"
      modal-class="w-64"
      :padding="false"
      :closeable="cancelable"
      @input="cancelable ? cancel() : null"
    >
      <div class="mb-1 p-4">
        <h4 class="font-bold text-center text-lg">{{ title }}</h4>
        <p class="text-sm text-center mt-1" v-html="message" />
        <TextField
          v-if="type === 'prompt' && ['text', 'number'].indexOf(promptType) !== -1"
          ref="input"
          v-model="promptValue"
          class="mt-3"
          margin="0"
          :custom-error="promptErrorText ? true : false"
          :custom-error-msg="promptErrorText"
          :placeholder="promptPlaceholder"
          :type="promptType"
          :required="promptRequired"
          @input="onInput"
        />
        <SelectField
          v-else-if="type === 'prompt' && promptType === 'select'"
          ref="input"
          v-model="promptValue"
          class="mt-3"
          margin="0"
          :placeholder="promptPlaceholder"
          :type="promptType"
          :required="promptRequired"
          @change="onSelect"
        >
          <option
            v-for="option in promptOptions"
            :key="option.value"
            :value="option.value"
          >
            {{ option.label }}
          </option>
        </SelectField>
      </div>
      <div class="flex flex-wrap md:flex-no-wrap w-full border-t border-gray-200">
        <button
          v-if="cancelable"
          ref="cancelButton"
          type="button"
          class="flex justify-center w-full py-2 transition-all duration-150 focus:outline-none"
          :class="{
            'text-blue-500 focus:text-gray-700 focus:bg-gray-100': theme === 'primary',
            'text-gray-700 focus:text-gray-700 focus:bg-gray-200': theme === 'alert',
          }"
          @click="cancel"
        >
          {{ cancelText }}
        </button>
        <div class="hidden md:flex flex-shrink-0 w-px h-10 bg-gray-200" aria-hidden="true" />
        <button
          ref="confirmButton"
          type="button"
          class="flex border-t border-gray-200 md:border-none justify-center w-full py-2
          transition-all duration-150 font-semibold focus:outline-none"
          :class="{
            'text-blue-500 focus:text-gray-700 focus:bg-gray-100': theme === 'primary' && !confirmDisabled,
            'text-red-500 focus:text-red-700 focus:bg-red-200': theme === 'alert' && !confirmDisabled,
            'text-gray-600 cursor-not-allowed': confirmDisabled,
          }"
          :disabled="confirmDisabled"
          @click="confirm"
        >
          {{ confirmText }}
          <span v-if="disableTimeout !== null && disabledRestTime > 0">
            (<span class="font-numeric-tabular">{{ disabledRestTime }}</span>s)
          </span>
        </button>
      </div>
    </Modal>
  </div>
</template>

<script>
import Modal from '../Modal.vue';
import TextField from '../Form/TextField.vue';

export default {
  components: {
    Modal,
    TextField,
  },

  props: {
    type: {
      type: String,
      default: 'alert',
      validator: (value) => ['alert', 'confirm', 'prompt'].indexOf(value) !== -1,
    },
    value: {
      // value model of input
      type: [String, Number],
      default: null,
    },
    open: {
      type: Boolean,
      default: false,
    },
    confirmText: {
      type: String,
      default: 'Ok',
    },
    cancelText: {
      type: String,
      default: 'Abbrechen',
    },
    cancelable: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      default: null,
    },
    message: {
      type: String,
      required: true,
    },
    promptPlaceholder: {
      type: String,
      default: null,
    },
    promptType: {
      type: String,
      default: 'text',
    },
    promptRequired: {
      type: Boolean,
      default: true,
    },
    promptErrorText: {
      type: String,
      default: null,
    },
    theme: {
      type: String,
      default: 'primary',
      validator: (value) => ['primary', 'alert'].indexOf(value) !== -1,
    },
    onInput: {
      type: Function,
      default: () => {},
    },
    onConfirm: {
      type: Function,
      default: () => {},
    },
    onCancel: {
      type: Function,
      default: () => {},
    },
    onSelect: {
      type: Function,
      default: () => {},
    },
    promptOptions: {
      type: Array,
      default: () => [],
    },
    autoClose: {
      type: Boolean,
      default: true,
    },
    disableTimeout: {
      type: Number,
      default: null,
    },
  },

  data() {
    return {
      isActive: false,
      disabledRestTime: 0,
      promptValue: '',
    };
  },

  computed: {
    confirmDisabled() {
      return this.disabledRestTime !== null && this.disabledRestTime > 0;
    },
  },

  watch: {
    isActive: {
      immediate: true,
      handler(newVal) {
        if (newVal) {
          document.body.classList.add('dialog-open');
        } else document.body.classList.remove('dialog-open');
      },
    },
    value: {
      immediate: true,
      handler(newVal) {
        this.promptValue = newVal;
      },
    },
  },

  mounted() {
    this.isActive = true;
    this.inputRequired = this.type === 'prompt';
    if (this.cancelable) {
      this.$hotkeys('esc', () => {
        this.close();
      });
    }
    if (this.disableTimeout !== null) {
      this.disabledRestTime = this.disableTimeout;
      const interval = setInterval(() => {
        this.disabledRestTime -= 1;
        if (this.disabledRestTime === 0) clearInterval(interval);
      }, 1000);
    }
  },

  beforeDestroy() {
    this.$hotkeys.unbind('esc');
  },

  methods: {
    close() {
      this.isActive = false;
      this.$emit('close');
      this.onCancel();
      setTimeout(() => {
        document.body.removeChild(this.$el);
        this.$destroy();
      }, 150);
    },
    confirm() {
      this.$emit('confirm', this.type === 'prompt' ? this.promptValue : '');
      this.onConfirm(this.type === 'prompt' ? this.promptValue : '');

      if (this.type !== 'prompt' && this.autoClose) {
        this.isActive = false;
        setTimeout(() => {
          document.body.removeChild(this.$el);
          this.$destroy();
        }, 150);
      } else if (this.autoClose) {
        this.$refs.input.checkValidity();
        this.$nextTick(() => {
          if (!this.$refs.input.htmlError) {
            this.isActive = false;
            setTimeout(() => {
              document.body.removeChild(this.$el);
              this.$destroy();
            }, 150);
          }
        });
      }
    },
    cancel() {
      this.$emit('cancel');
      this.close();
    },
    removeElement(el) {
      if (typeof el.remove !== 'undefined') {
        el.remove();
      } else if (typeof el.parentNode !== 'undefined') {
        el.parentNode.removeChild(el);
      }
    },
  },
};
</script>
