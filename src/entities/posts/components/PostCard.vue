<template>
  <article class="card">
    <img class="card__img" :src="post.img" :alt="post.title" />
    <h3 class="card__title">{{ post.title }}</h3>
    <ul class="card__meta">
      <li class="card__meta-item">{{ parsedDate }}</li>
      <li class="card__meta-item">{{ post.author }}</li>
    </ul>
    <p class="card__description">{{ post.body }}</p>
  </article>
</template>

<script lang="ts">
// TODO: looks like a shared component
import { Post } from "@/shared/api/posts/models";

export default {
  props: {
    post: {
      type: Object as () => Post,
      required: true,
    },
  },
  computed: {
    parsedDate(props: { post: Post }) {
      return new Date(props.post.date).toLocaleDateString();
    },
  },
};
</script>

<style lang="scss" scoped>
@import "src/app/styles/variables";
@import "src/app/styles/mixins";

.card {
  display: flex;
  flex-direction: column;

  row-gap: 16px;

  .card__img {
    width: 100%;
    height: 96px;

    object-fit: cover;
    border-radius: 10px;

    @include md {
      height: 128px;
    }

    @include xl {
      height: 176px;
    }
  }

  .card__title {
    margin: 0;

    font-size: 16px;

    @include md {
      font-size: 18px;
    }

    @include xl {
      font-size: 24px;
    }
  }

  .card__meta {
    @include pure-list;

    display: flex;
    gap: 16px;
  }

  .card__meta-item {
    color: $colorPrimaryLightest;
    font-family: $fontSecondary;
    font-size: 8px;

    @include md {
      font-size: 12px;
    }
  }

  .card__description {
    $line-height: 1.4;

    margin: 0;
    color: $colorPrimaryLight;

    @include max-text-lines($line-height, 4);

    @include md {
      font-size: 14px;

      @include max-text-lines($line-height, 6);
    }

    @include xl {
      @include max-text-lines($line-height, 7);
    }
  }
}
</style>
