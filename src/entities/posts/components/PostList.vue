<template>
  <section class="posts">
    <post-card v-for="post in posts" :post="post" :key="post.id"></post-card>
    <ui-preloader class="page__meta" v-if="isLoading"></ui-preloader>
    <p class="page__meta" v-if="isEmpty">We can't find any posts 😔</p>
  </section>
</template>

<script lang="ts">
import { Post } from "@/shared/api/posts/models";
import PostCard from "@/entities/posts/components/PostCard.vue";

export default {
  components: {
    PostCard,
  },
  props: {
    posts: {
      type: Object as () => Post[],
      required: true,
    },
    isEmpty: {
      type: Boolean,
      default: false,
    },
    isLoading: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
@import "src/app/styles/variables";
@import "src/app/styles/mixins";

.posts {
  min-height: 500px;
  display: grid;

  grid-template-columns: repeat(2, 1fr);
  gap: 32px 20px;

  @include md {
    grid-template-columns: repeat(3, 1fr);
    gap: 48px 20px;
  }

  @include xl {
    grid-template-columns: repeat(4, 1fr);
    gap: 72px 30px;
  }
}

.page__meta {
  grid-column: 1 / -1;
  justify-self: center;
  align-self: center;
}

.posts-list {
  display: inline-block;
  margin-right: 10px;
}
.posts-list-enter-active,
.posts-list-leave-active {
  transition: all 0.17s ease;
}
.posts-list-enter-from,
.posts-list-leave-to {
  opacity: 0;
  transform: translateX(200px);
}
.posts-list-move {
  transition: transform 0.17s ease;
}
</style>
