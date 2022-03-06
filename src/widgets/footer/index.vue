<template>
  <footer class="footer">
    <div class="footer__wrapper">Copyright 2022 News Portal</div>
  </footer>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "/src/app/styles/mixins";
@import "/src/app/styles/variables";

.footer {
  padding: 32px 0;

  text-align: center;

  color: $colorPrimaryLightest;
  background-color: $colorNeutral;
}

.footer__wrapper {
  @include wrapper;
}
</style>
