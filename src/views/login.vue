<template>
  <form @submit.prevent="handleLogin">
    <h3>Login</h3>

    <label for="email">Email:</label>
    <input type="email" name="email" v-model="email" required />

    <label for="email">Password:</label>
    <input type="password" name="password" v-model="password" required />

    <button>Login</button>
    <div v-show="error">{{ error }}</div>
  </form>
</template>

<script>
import { loginApi } from "../compositionapi/loginApi.js";

export default {
  name: "logIn",
  setup() {
    const { email, password, handleLogin, error } = loginApi();

    return { handleLogin, email, password, error };
  },
};
</script>