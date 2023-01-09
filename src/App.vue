<template>
  <div class="container">
    <navBar />
    <router-view />
  </div>
</template>

<script>
import navBar from "./components/navbar.vue";

export default {
  components: { navBar },
};
</script>