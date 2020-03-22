<template>
  <ViewWrapper class="h-screen">
    <div class="flex flex-col w-full h-full justify-center items-center">
      <section class="max-w-80 w-full rounded-lg">
        <div class="flex flex-col justify-center w-full mb-4">
          <div class="w-full text-center">
            <img src="../../assets/logo.png" class="inline-block">
          </div>
          <!-- <h1 class="text-center font-semibold text-2xl">{{ $t('login') }}</h1> -->
        </div>
        <div class="w-full">
          <form
            class="form login-form"
            @submit.prevent="login"
          >
            <TextField
              v-model="email"
              :label="$t('email')"
              :custom-error="loginError ? true : false"
              :custom-error-msg="$t('loginError')"
              required
              autofocus
              type="email"
            />
            <TextField
              v-model="password"
              :label="$t('password')"
              required
              :minlength="6"
              type="password"
            />
            <div class="mb-4 text-sm">
              <router-link to="/password-forgotten">{{ $t('forgotPassword') }}</router-link>
            </div>
            <Button
              theme="primary"
              class="w-full"
              type="submit"
              :loading="loading"
            >
              {{ $t('login') }}
            </Button>
            <div class="flex my-4 items-center">
              <hr class="flex flex-1">
              <span class="px-2 text-sm font-medium text-gray-600">{{ $t('newHere') }}</span>
              <hr class="flex flex-1">
            </div>
            <Button class="w-full" to="/register">{{ $t('signUpNow') }}</Button>
          </form>
        </div>
      </section>
    </div>
  </ViewWrapper>
</template>

<script>
export default {
  injectModels: ['Authentication'],

  data() {
    return {
      email: null,
      password: null,

      loginError: false,
      loading: false,
    };
  },

  methods: {
    login() {
      this.loading = true;
      this.Authentication.login(this.email, this.password)
        .then(() => {
          this.loading = false;
        })
        .catch(() => {
          this.loginError = true;
          this.password = null;
          this.loading = false;
        });
    },
  },
};
</script>
