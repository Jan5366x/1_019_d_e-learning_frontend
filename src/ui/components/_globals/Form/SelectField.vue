<template>
  <div x-component="SelectField" :class="`mb-${margin}`">
    <LabelText
      v-if="label"
      :for-id="id"
      :disabled="(!hasError && readonly && !disabled) || (!hasError && !readonly && disabled)"
      :required="required"
    >
      {{ label }}
    </LabelText>
    <div class="w-full relative flex items-center">
      <select
        :id="id"
        ref="input"
        class="p-2 w-full duration-150 transition-all ease-in-out appearance-none pr-8 cursor-pointer
        focus:border-black focus:outline-none tap-color-transparent rounded-lg border shadow-sm"
        :class="[{
          'text-gray-500': !value,
          'bg-white border-gray-400 focus:shadow-outline': !hasError && !readonly && !disabled,
          'bg-red-100 border-red-500 focus:shadow-outline': hasError && !readonly && !disabled,
          'bg-gray-200 border-gray-400 cursor-not-allowed': !hasError && readonly && !disabled,
          'bg-gray-200 border-gray-400 text-gray-600 cursor-not-allowed select-none': !hasError && !readonly && disabled,
        }, fieldClass]"
        :value="value"
        :disabled="disabled"
        :readonly="readonly"
        :required="required"
        :aria-label="label || placeholder"
        @change="onChange"
        @blur="onBlur"
        @focus="onFocus"
      >
        <option
          v-if="nullOption"
          :value="null"
          disabled
          selected
        >
          {{ !label && required && placeholder ? `${placeholder}*` : placeholder ? placeholder : '' }}
        </option>
        <slot />
      </select>
      <Icon
        name="unfold_more"
        class="absolute text-gray-600 block right-0 mr-2 select-none z-2"
      />
    </div>
    <span
      class="text-sm px-2 text-red-500 duration-150 transition-all ease-in-out overflow-hidden block select-none"
      :class="{
        'h-0': !hasError,
        'h-5': hasError
      }"
    >
      {{ hasError }}
    </span>
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
      default: null,
    },
    label: {
      type: String,
      default: null,
    },
    placeholder: {
      type: String,
      default: null,
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
    nullOption: {
      type: Boolean,
      default: true,
    },
    fieldClass: {
      type: String,
      default: null,
    },
    margin: {
      type: [String, Number],
      default: 4,
    },
  },

  data() {
    return {
      htmlError: false,
      touchModalOpen: false,
      options: [],
    };
  },

  computed: {
    hasError() {
      if (this.htmlError) return this.htmlError;
      return false;
    },
    selectedValueLabel() {
      let label = '';
      this.options.forEach((option) => {
        if (this.value && option.value.toString() === this.value.toString()) label = option.label;
      });
      return label;
    },
  },

  mounted() {
    if (this.autofocus) this.$nextTick(() => { this.focus(); });
    this.$nextTick(() => {
      if (this.$slots.default) {
        this.$slots.default.forEach((option) => {
          this.options.push({
            value: option.elm.value,
            label: option.elm.innerText,
          });
        });
      }
    });
  },

  methods: {
    mobileChange(value) {
      this.$emit('change', value);
      this.$emit('input', value);
      if (this.htmlError) this.checkValidity();
      this.touchModalOpen = false;
    },
    onChange() {
      this.$emit('change', this.$refs.input.value);
      this.$emit('input', this.$refs.input.value);
      if (this.htmlError) this.checkValidity();
    },
    onInput() {
      this.$emit('input', this.$refs.input.value);
      if (this.htmlError) this.checkValidity();
    },
    onBlur(e) {
      this.$emit('blur', e);
      this.checkValidity();
    },
    onFocus(e) {
      this.$emit('focus', e);
    },
    focus() {
      this.$refs.input.focus();
    },
    blur() {
      this.$refs.input.blur();
    },
    checkValidity() {
      this.htmlError = this.$refs.input.validationMessage;
    },
  },
};
</script>
