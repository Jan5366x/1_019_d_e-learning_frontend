<template>
  <div class="px-4 flex flex-col w-full h-screen justify-center items-center">
    <section class="shadow pt-12 pb-12 pl-6 pr-6 min-w-80 max-w-full rounded-lg">
      <div class="w-full mb-4">
        <h1 class="text-center font-semibold text-2xl">Login</h1>
      </div>
      <div class="w-full">
        <form
          class="form login-form"
          @submit.prevent="login"
        >
          <TextField
            v-model="email"
            :label="$t('email')"
            required
            autofocus
            type="email"
          />
          <TextField
            v-model="password"
            :label="$t('password')"
            required
            type="password"
          />
          <div class="mb-4 text-sm">
            <router-link to="/">{{ $t('forgotPassword') }}</router-link>
          </div>
          <Button theme="primary" class="w-full" type="submit">
            {{ $t('login') }}
          </Button>
        </form>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  injectModels: ['Authentication'],

  data() {
    return {
      email: null,
      password: null,
    };
  },

  methods: {
    login() {
      this.Authentication.login(this.email, this.password);
    },
  },
};
</script>
