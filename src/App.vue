<template>
  <div id="app">
    <div class="p-4 md:p-6">
      <router-view />
    </div>
    <!-- Target for modals/dialogs => prevent z-index bugs -->
    <PortalTarget
      class="fixed top-0 left-0 z-20"
      name="modal"
      multiple
    />
    <PortalTarget
      class="fixed top-0 left-0 z-21"
      name="dialog"
      multiple
    />
  </div>
</template>

<script>
import Application from './models/Application';
import Authentication from './models/Authentication';

export default {
  models: {
    Application,
    Authentication,
  },
};
</script>
