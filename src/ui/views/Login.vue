<template>
  <div class="px-6 py-4 bg-white shadow rounded-lg">
    <h1 class="text-center">Login</h1>
    <form class="form login-form">
      <div class="mb-4">
        <label for="username">Username</label>
        <input
          id="username"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          placeholder="Username"
        >
      </div>
      <div class="mb-4">
        <label for="username">Password</label>
        <input
          id="password"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="password"
          placeholder="*************************"
        >
      </div>
      <div class="mb-4 text-center">
        <a href="#">Forgot Password?</a>
      </div>
      <div class="mb-4 text-center">
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Login
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Login',
};
</script>

<style scoped>

</style>
