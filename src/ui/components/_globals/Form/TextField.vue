<template>
  <div x-component="TextField" :class="`mb-${margin}`">
    <LabelText
      v-if="label"
      :for-id="id"
      :disabled="(!hasError && readonly && !disabled) || (!hasError && !readonly && disabled)"
      :required="required"
    >
      {{ label }}
    </LabelText>
    <div class="relative">
      <div
        v-if="unit || $slots.unit"
        class="absolute top-1/2 transform -translate-y-1/2 left-0 ml-2 z-5 text text-gray-700 rounded
        py-px w-4 flex items-center justify-center font-medium"
      >
        <template v-if="!$slots.unit">{{ unit }}</template>
        <slot name="unit" />
      </div>
      <input
        :id="id"
        ref="input"
        class="p-2 w-full duration-150 transition-all ease-in-out appearance-none relative
        focus:border-black focus:outline-none focus:z-2 min-h-10 border rounded-lg shadow-sm"
        :class="[{
          'pl-8': unit || $slots.unit,
          'bg-white border-gray-400 focus:shadow-outline': hasError === false && !readonly && !disabled,
          'bg-red-200 border-red-500 placeholder-gray-600 z-2 focus:shadow-outline': (hasError !== false && typeof hasError === 'string')
            && !readonly && !disabled,
          'bg-gray-200 border-gray-400': !hasError && readonly && !disabled,
          'bg-gray-200 border-gray-200 text-gray-600 cursor-not-allowed select-none': !hasError && !readonly && disabled,
        }, fieldClass]"
        :style="fieldCss"
        :value="value"
        :placeholder="!label && required ? `${placeholder}*` : placeholder"
        :disabled="disabled"
        :readonly="readonly"
        :type="type"
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
      >
      <button
        v-if="clearButton && (value && value.length > 0)"
        class="absolute right-0 mr-2 top-1/2 transform -translate-y-1/2 focus:outline-none bg-gray-500 w-4 h-4 flex items-center
        justify-center leading-none rounded-full cursor-pointer z-5 active:bg-gray-600 focus:shadow-outline transition-all duration-150"
        @click="clear"
      >
        <Icon
          :name="clearButtonIcon"
          size="sm"
          class="text-white"
          cursor="pointer"
          inline-flex
        />
      </button>
    </div>
    <div
      class="flex items-center duration-150 transition-all ease-in-out truncate"
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
    type: {
      type: String,
      default: 'text',
      validator: (value) => ['color', 'date', 'datetime-local', 'email', 'month', 'number', 'range', 'search', 'tel', 'time',
        'url', 'week', 'file', 'image', 'number', 'password', 'search', 'text'].indexOf(value) !== -1,
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
    clearButton: {
      type: Boolean,
      default: false,
    },
    clearButtonIcon: {
      type: String,
      default: 'clear',
    },
    unit: {
      type: String,
      default: null,
    },
  },

  data() {
    return {
      hasFocus: false,
      htmlError: false,
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
    fieldCss() {
      if (this.fieldStyle) return `max-height: 2.5625rem; ${this.fieldStyle}`;
      return 'max-height: 2.5625rem';
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
    clear() {
      this.$emit('input', null);
      this.$emit('change', null);
      this.$refs.input.value = null;
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
