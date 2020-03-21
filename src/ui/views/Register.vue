<template>
  <ViewWrapper class="h-screen">
    <div class="flex flex-col w-full h-full justify-center items-center">
      <section class="max-w-80 w-full rounded-lg">
        <div class="w-full mb-4">
          <h1 class="text-center font-semibold text-2xl">{{ $t('signUp') }}</h1>
        </div>
        <div class="w-full">
          <form
            class="form login-form"
            @submit.prevent="signup"
          >
            <TextField
              v-model="form.firstName"
              :label="$t('firstName')"
              required
              autofocus
            />
            <TextField
              v-model="form.lastName"
              :label="$t('lastName')"
              required
            />
            <TextField
              v-model="form.email"
              :label="$t('email')"
              required
              type="email"
            />
            <TextField
              v-model="form.password"
              :label="$t('password')"
              :minlength="6"
              required
              type="password"
            />
            <Button theme="primary" class="w-full" type="submit">
              {{ $t('signUp') }}
            </Button>
            <div class="flex my-4 items-center">
              <hr class="flex flex-1">
              <span class="px-2 text-sm font-medium text-gray-600">{{ $t('haveAlreadyAnAccount') }}</span>
              <hr class="flex flex-1">
            </div>
            <Button class="w-full" to="/login">{{ $t('signInNow') }}</Button>
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
      form: {
        firstName: null,
        lastName: null,
        email: null,
        password: null,
      },
    };
  },

  methods: {
    signup() {
      // this.Authentication.login(this.email, this.password);
    },
  },
};
</script>
