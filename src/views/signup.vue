<template>
  <form @submit.prevent="handleSubmit">
    <h3>Sign up</h3>

    <label for="email">Email:</label>
    <input type="email" name="email" v-model="email" required />

    <label for="email">Password:</label>
    <input type="password" name="password" v-model="password" required />

    <button>Sign up</button>
    <div v-show="error">{{ error }}</div>
  </form>
</template>

<script>
import { compApi } from "../compositionapi/compApi.js";

export default {
  name: "signUp",
  setup() {
    const { email, password, handleSubmit, error } = compApi();

    return { handleSubmit, email, password, error };
  },
};
</script>