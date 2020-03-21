<template>
  <div class="px-6 py-4 bg-white shadow rounded-lg">
    <h2>{{ $t('hello', {n: userName }) }}</h2>
    <span>{{ $moment().format($t('dateTimeFormat')) }}</span>
    <ul>
      <li>OS: {{ Application.os }}</li>
      <li>Touch-Device: {{ Application.touch }}</li>
    </ul>

    <TextField v-model="textfield" :label="$t('label')" required />
    <TextArea v-model="textarea" :label="$t('label')" />
    <SelectField v-model="select" :label="$t('label')">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </SelectField>
    <Button
      class="mr-2"
      theme="primary"
      @click="$ui.dialog.alert({ message: 'Test 123' })"
    >
      Dialog
    </Button>
    <Button theme="secondary" class="mr-2" @click="modal = true">Modal</Button>
    <Button>Noch ein Button</Button>

    <Portal to="modal">
      <Modal v-model="modal" modal-class="w-64">
        <template v-slot:header>
          Header
        </template>
        Modal Test
        <template v-slot:footer>
          <Button @click="modal = false">Schließen</Button>
        </template>
      </Modal>
    </Portal>
    <Portal to="dialog">
      <div>Dialog Test</div>
    </Portal>
  </div>
</template>

<script>
export default {
  injectModels: ['Application', 'Authentication'],

  data() {
    return {
      textfield: null,
      textarea: null,
      select: null,
      modal: false,
    };
  },

  computed: {
    userName() {
      if (this.Authentication.user) {
        return `${this.Authentication.user.firstName} ${this.Authentication.user.lastName}`;
      }
      return '';
    },
  },
};
</script>
