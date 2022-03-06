<template>
  <Routing />
</template>

<script setup lang="ts">
import { Routing } from "@/pages";
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&display=swap");
@import "styles/variables";
@import "styles/mixins";

html,
body {
  height: 100%;
  width: 100%;
  padding: 0;
  margin: 0;
}

#app {
  display: flex;
  flex-direction: column;

  height: 100%;

  color: $colorPrimary;
  background-color: $colorNeutralLight;

  font-family: $fontPrimary;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  main {
    flex: auto;
  }
}
</style>
