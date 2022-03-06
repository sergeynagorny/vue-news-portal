<template>
  <div class="logo">
    <span class="logo__news">News</span>
    <span class="logo__portal">Portal</span>
  </div>
</template>

<script>
export default {
  name: "ui-logo",
};
</script>

<style lang="scss" scoped>
@import "/src/app/styles/variables";

.logo {
  display: inline-block;
  user-select: none;

  font-size: 16px;
  font-weight: bold;
  line-height: 1;

  .logo__news,
  .logo__portal {
    padding: 8px;
    display: inline-block;
  }

  .logo__news {
    display: inline-block;

    background-color: $colorPrimary;
    color: $colorNeutralLight;
    border-radius: 4px;
  }
}
</style>
