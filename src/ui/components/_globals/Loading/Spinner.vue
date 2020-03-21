<template>
  <div x-component="LoadingDualRing" class="lds-dual-ring" :class="`theme-${theme}`" />
</template>

<script>
export default {
  props: {
    theme: {
      type: String,
      default: 'light',
      validator: (value) => ['light', 'dark', 'primary'].indexOf(value) !== -1,
    },
  },
};
</script>

<style lang="scss" scoped>
.lds-dual-ring {
  display: inline-flex;
  width: 24px;
  height: 24px;
}
.lds-dual-ring:after {
  content: " ";
  display: block;
  width: 20px;
  height: 20px;
  margin: 2px;
  border-radius: 50%;
  animation: lds-dual-ring 1.2s linear infinite;
}
.lds-dual-ring.theme-light:after {
  border: 3px solid theme('colors.white');
  border-color: theme('colors.white') transparent theme('colors.white') transparent;
}
.lds-dual-ring.theme-dark:after {
  border: 3px solid theme('colors.gray.900');
  border-color: theme('colors.gray.900') transparent theme('colors.gray.900') transparent;
}
.lds-dual-ring.theme-primary:after {
  border: 3px solid theme('colors.teal.500');
  border-color: theme('colors.teal.500') transparent theme('colors.teal.500') transparent;
}
@keyframes lds-dual-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
