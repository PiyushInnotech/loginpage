<template>
  <div class="home">
    <div v-for="blog in blogs" :key="blog.id">
      <div class="blog">
        <h3>{{ blog.title }}</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
          aspernatur consectetur doloremque sunt ducimus enim iure animi fugit
          nulla et! Perferendis autem deleniti quo eum corrupti reiciendis
          voluptatem ab ducimus?
        </p>
        <div class="icons" v-if="user">
          <span>upvote or downvote this article: </span>
          <span class="material-icons">thumb_up</span>
          <span class="material-icons">thumb_down</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { compApi } from "@/compositionapi/compApi";

export default {
  name: "homeView",
  setup() {
    const { blogs, user } = compApi();
    return {
      blogs,
      user,
    };
  },
};
</script>
