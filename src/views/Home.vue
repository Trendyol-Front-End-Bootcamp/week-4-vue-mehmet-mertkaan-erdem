<template>
  <div class="home">
    <img alt="Star Wars logo" src="../assets/starwars-logo.png" />
    <EnteringUniverse msg="Welcome to the universe" />
  </div>
</template>

<script>
// @ is an alias to /src
import EnteringUniverse from "@/components/EnteringUniverse.vue";

export default {
  name: "Home",
  components: {
    EnteringUniverse,
  },
};
</script>
