<template>
  <page-header :with-search="true"></page-header>
  <page-content>
    <section class="page">
      <div class="page__controls">
        <h2 class="page__title">Latest News</h2>
        <posts-sort></posts-sort>
      </div>
      <div class="page__content">
        <post-list
          :is-loading="isLoading"
          :is-empty="isPostsEmpty"
          :posts="displayedPosts"
        ></post-list>
      </div>
    </section>
  </page-content>
  <page-footer></page-footer>
</template>

<script lang="ts">
import PageHeader from "@/widgets/header";
import PageFooter from "@/widgets/footer";
import PageContent from "@/widgets/content";
import { PostList } from "@/entities/posts/components";
import usePostsModel from "@/entities/posts/model/posts";
import PostsSort from "@/features/posts-sort";
import { onMounted } from "vue";

export default {
  components: {
    PageHeader,
    PageFooter,
    PageContent,
    PostList,
    PostsSort,
  },
  data() {
    return {
      isActive: true,
    };
  },
  setup() {
    const { displayedPosts, isPostsEmpty, fetchPosts, isLoading } =
      usePostsModel();

    onMounted(fetchPosts);

    return { displayedPosts, isPostsEmpty, isLoading };
  },
};
</script>

<style lang="scss" scoped>
@import "../app/styles/variables";
@import "../app/styles/mixins";

.page {
  display: flex;
  flex-direction: column;
  min-height: 100%;

  .page__title {
    margin: 0;

    font-family: $fontSecondary;
    font-size: 24px;

    @include xl {
      font-size: 36px;
    }
  }

  .page__controls {
    display: flex;
    justify-content: space-between;
    margin-bottom: 16px;

    @include md {
      margin-bottom: 24px;
    }
  }

  .page__content {
    flex-grow: 1;
  }
}
</style>
