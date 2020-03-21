<template>
  <ViewWrapper class="h-screen">
    <div class="flex flex-col w-full h-full justify-center items-center">
      <section class="max-w-80 w-full rounded-lg">
        <div class="w-full mb-4">
          <h1 class="text-center font-semibold text-2xl">{{ $t('forgotPassword') }}</h1>
          <p class="text-sm text-center mt-1 text-gray-700">
            {{ $t('sendPasswordResetEmail') }}
          </p>
        </div>
        <div class="w-full">
          <form
            class="form login-form"
            @submit.prevent="sendResetMail"
          >
            <TextField
              v-model="email"
              :label="$t('email')"
              required
              autofocus
              type="email"
            />
            <Button theme="primary" class="w-full" type="submit">
              {{ $t('resetPassword') }}
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
    };
  },

  methods: {
    sendResetMail() {
      // TODO: Api Implementation
    },
  },
};
</script>
