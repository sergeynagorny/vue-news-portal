<template>
  <header class="header">
    <ui-logo></ui-logo>
    <div class="header__controls">
      <posts-search v-if="withSearch"></posts-search>
    </div>
  </header>
</template>

<script>
import PostsSearch from "@/features/posts-search";

export default {
  components: {
    PostsSearch,
  },
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
