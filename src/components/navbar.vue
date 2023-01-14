<template>
  <nav>
    <h1>Vuex Auth</h1>
    <!-- for all users -->
    <template v-if="authUser">
      <div>
        <router-link to="/">Home</router-link>
      </div>
      <!-- for logged in users -->
      <div v-if="user">
        <span>Logged in as...{{ user.email }}</span>
        <button @click="handleLogout">Logout</button>
      </div>
      <!-- for logged out users -->
      <div v-if="!user">
        <router-link to="/login">Login</router-link>
        <router-link to="/signup">Signup</router-link>
      </div>
    </template>
  </nav>
</template>

<script>
import { loginApi } from "@/compositionapi/loginApi";
export default {
  name: "navBar",
  setup() {
    const { handleLogout, user, authUser } = loginApi();

    return { handleLogout, user, authUser };
  },
};
</script>