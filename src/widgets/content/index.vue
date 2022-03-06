<template>
  <main class="main">
    <slot></slot>
  </main>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "src/app/styles/variables";
@import "src/app/styles/mixins";

.main {
  @include wrapper;
  flex: auto;

  padding: 8px 0 16px;

  @include md {
    padding: 16px 0 32px;
  }
  @include xl {
    padding: 40px 0 80px;
  }
}
</style>
