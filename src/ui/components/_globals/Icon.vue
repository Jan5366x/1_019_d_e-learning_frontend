<template>
  <span x-component="Icon" class="icon select-none" :class="[`text-${size}`, `cursor-${cursor}`, displayClass]">
    {{ renderedIcon }}
  </span>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    size: {
      type: String,
      default: '2xl',
    },
    inlineFlex: {
      type: Boolean,
      default: false,
    },
    cursor: {
      type: String,
      default: 'default',
    },
  },

  computed: {
    renderedIcon() {
      return this.name;
    },
    displayClass() {
      if (this.inlineFlex) return 'inline-flex justify-center';
      return 'inline';
    },
  },
};
</script>

<style lang="scss" scoped>
.icon {
  // font-family: 'SFProText';
  // font-weight: 400;
  font-family: 'Material Icons Round';
  font-weight: normal;
  font-style: normal;
  line-height: 1;
  letter-spacing: normal;
  text-transform: none;
  vertical-align: middle;
  white-space: nowrap;
  word-wrap: normal;
  direction: ltr;
  text-align: center;
  -webkit-font-feature-settings: 'liga';
  -webkit-font-smoothing: antialiased;
}
</style>
