<template>
  <div id="app">
    <Navbar
      class="transform transition duration-200"
      :class="{
        '-translate-y-full': !$route.meta.authRequired || !Authentication.user,
      }"
    >
      <template v-if="Authentication.user && Authentication.user.role === 'teacher'">
        <NavbarItem to="/">Home</NavbarItem>
        <NavbarItem to="/courses">Kurse</NavbarItem>
      </template>
      <template v-else-if="Authentication.user && Authentication.user.role === 'student'">
        <NavbarItem to="/">Home</NavbarItem>
        <NavbarItem to="/courses">Kurse</NavbarItem>
      </template>
    </Navbar>
    <div
      class="transform transition duration-200"
      :class="{
        'pt-16': $route.meta.authRequired && Authentication.user,
      }"
    >
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
export default {
  injectModels: ['Authentication'],
};
</script>
