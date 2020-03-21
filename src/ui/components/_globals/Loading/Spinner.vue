<template>
  <div class="spinner">
    <div class="double-bounce1" :class="theme" />
    <div class="double-bounce2" :class="theme" />
  </div>
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
.spinner {
  display: inline-flex;
  width: 24px;
  height: 24px;
  position: relative;
}

.double-bounce1, .double-bounce2 {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  opacity: 0.6;
  position: absolute;
  top: 0;
  left: 0;
  -webkit-animation: sk-bounce 2.0s infinite ease-in-out;
  animation: sk-bounce 2.0s infinite ease-in-out;

  &.dark {
    @apply bg-gray-800;
  }
  &.light {
    @apply bg-white;
  }
  &.primary {
    @apply bg-black;
  }
}

.double-bounce2 {
  -webkit-animation-delay: -1.0s;
  animation-delay: -1.0s;
}

@-webkit-keyframes sk-bounce {
  0%, 100% { -webkit-transform: scale(0.0) }
  50% { -webkit-transform: scale(1.0) }
}

@keyframes sk-bounce {
  0%, 100% {
    transform: scale(0.0);
    -webkit-transform: scale(0.0);
  } 50% {
    transform: scale(1.0);
    -webkit-transform: scale(1.0);
  }
}
</style>
