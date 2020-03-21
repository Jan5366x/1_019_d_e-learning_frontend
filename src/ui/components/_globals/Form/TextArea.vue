<template>
  <div x-component="TextArea" :class="`mb-${margin}`">
    <LabelText
      v-if="label"
      :for-id="id"
      :disabled="(!hasError && readonly && !disabled) || (!hasError && !readonly && disabled)"
      :required="required"
    >
      {{ label }}
    </LabelText>
    <textarea
      :id="id"
      ref="input"
      class="p-2 w-full duration-150 transition-all ease-in-out appearance-none relative resize-none
      focus:border-black focus:outline-none rounded-lg border shadow-sm"
      :class="[{
        'bg-white border-gray-400 focus:shadow-outline': hasError === false && !readonly && !disabled,
        'bg-red-200 border-red-500 placeholder-gray-600 z-5': (hasError !== false && typeof hasError === 'string')
          && !readonly && !disabled,
        'bg-gray-200 border-gray-400 cursor-not-allowed': !hasError && readonly && !disabled,
        'bg-gray-200 border-gray-200 text-gray-600 cursor-not-allowed select-none': !hasError && !readonly && disabled,
        'focus:shadow-outlines': outlineShadow,
      }, fieldClass]"
      :style="fieldStyle"
      :value="value"
      :placeholder="!label && required ? `${placeholder}*` : placeholder"
      :disabled="disabled"
      :readonly="readonly"
      :rows="rows"
      :required="required"
      :novalidate="!useValidation"
      :name="name"
      :minlength="minlength"
      :maxlength="maxlength"
      @change="onChange"
      @input="onInput"
      @blur="onBlur"
      @focus="onFocus"
      @keydown="onKeydown"
      @click="onClick"
    />
    <div
      class="-mt-1 flex items-center duration-150 transition-all ease-in-out truncate"
      :class="{
        'h-0': !hasError && (!maxlength || !hasFocus),
        'h-5': hasError || (maxlength && hasFocus)
      }"
    >
      <span
        class="text-xs px-1 text-red-500 overflow-hidden truncate block select-none"
      >
        {{ typeof hasError !== 'boolean' ? hasError : '' }}
      </span>
      <span v-if="maxlength" class="pr-px inline-flex flex-grow justify-end text-xs text-gray-600">
        {{ value && value.length || 0 }} / {{ maxlength }}
      </span>
    </div>
  </div>
</template>

<script>
import nanoid from 'nanoid';

export default {
  props: {
    id: {
      type: String,
      default: () => `field_${nanoid()}`,
    },
    value: {
      type: [String, Number],
      default: '',
    },
    label: {
      type: String,
      default: null,
    },
    placeholder: {
      type: String,
      default: null,
    },
    rows: {
      type: Number,
      default: 2,
    },
    required: {
      type: Boolean,
      default: false,
    },
    autofocus: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    readonly: {
      type: Boolean,
      default: false,
    },
    rounded: {
      type: String,
      default: 't-lg',
    },
    useValidation: {
      type: Boolean,
      default: true,
    },
    customError: {
      type: Boolean,
      default: false,
    },
    customErrorMsg: {
      type: String,
      default: null,
    },
    margin: {
      type: String,
      default: '4',
    },
    fieldClass: {
      type: String,
      default: null,
    },
    fieldStyle: {
      type: String,
      default: null,
    },
    outlineShadow: {
      type: Boolean,
      default: true,
    },
    name: {
      type: String,
      default: null,
    },
    minlength: {
      type: Number,
      default: null,
    },
    maxlength: {
      type: Number,
      default: null,
    },
    border: {
      type: String,
      default: '-b',
    },
  },

  data() {
    return {
      htmlError: false,
      hasFocus: false,
    };
  },

  computed: {
    hasError() {
      if (this.customError) return this.customErrorMsg;
      if (this.htmlError && this.htmlError.length > 0) return this.htmlError;
      return false;
    },
    roundedClass() {
      if (this.rounded.indexOf('t') !== -1) return `rounded-${this.rounded} rounded-b-none`;
      return `rounded-${this.rounded}`;
    },
  },

  watch: {
    autofocus: {
      immediate: true,
      handler(newVal) {
        if (newVal) {
          setTimeout(() => {
            this.focus();
          }, 100);
        }
      },
    },
  },

  methods: {
    onChange() {
      this.$emit('change', this.$refs.input.value);
      if (this.htmlError) this.checkValidity();
    },
    onInput() {
      this.$emit('input', this.$refs.input.value);
      if (this.htmlError) this.checkValidity();
    },
    onBlur(e) {
      this.hasFocus = false;
      this.$emit('blur', e);
      this.checkValidity();
    },
    onFocus(e) {
      this.hasFocus = true;
      this.$emit('focus', e);
    },
    onKeydown(e) {
      this.$emit('keydown', e);
    },
    onClick(e) {
      this.$emit('click', e);
    },
    focus() {
      this.$refs.input.focus();
    },
    blur() {
      this.$refs.input.blur();
    },
    checkValidity() {
      if (this.useValidation) this.htmlError = this.$refs.input.validationMessage;
    },
  },
};
</script>
