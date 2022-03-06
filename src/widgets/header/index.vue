<template>
  <header class="header">
    <ui-logo></ui-logo>
    <div class="header__controls">
      <ui-button v-if="withSearch" icon="search" type="ghost"></ui-button>
    </div>
  </header>
</template>

<script>
export default {
  props: {
    withSearch: {
      type: Boolean,
    },
  },
};
</script>

<style lang="scss" scoped>
@import "/src/app/styles/mixins";

.header {
  @include wrapper;

  display: flex;
  align-items: center;
  padding: 32px 0;

  .header__controls {
    display: flex;
    gap: 5px;
    margin-left: auto;
  }
}
</style>
