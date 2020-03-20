<template>
  <div class="px-6 py-4 bg-white shadow rounded-lg">
    <h2>{{ $t('hello', {n: userName }) }}</h2>
    <span>{{ $moment().format($t('dateTimeFormat')) }}</span>
    <ul>
      <li>OS: {{ Application.os }}</li>
      <li>Touch-Device: {{ Application.touch }}</li>
    </ul>

    <Portal to="modal">
      <div>Modal Test</div>
    </Portal>
    <Portal to="dialog">
      <div>Dialog Test</div>
    </Portal>
  </div>
</template>

<script>
export default {
  injectModels: ['Application', 'Authentication'],

  computed: {
    userName() {
      return `${this.Authentication.user.firstName} ${this.Authentication.user.lastName}`;
    },
  },
};
</script>
