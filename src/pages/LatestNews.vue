<template>
  <page-header :with-search="true"></page-header>
  <main class="page">
    <div class="page__controls">
      <h2 class="page__title">Latest News</h2>
      <ui-button
        v-if="!!news.length"
        @click="isActive = !isActive"
        type="ghost"
        :icon="`arrow-${isActive ? 'down' : 'up'}-wide-short`"
        >{{
          new Date(Date.now()).toLocaleDateString("en-US", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          })
        }}</ui-button
      >
    </div>
    <section class="page__content news">
      <article class="card" v-for="item in news" :key="item.id">
        <img class="card__img" :src="item.img" :alt="item.title" />
        <h3 class="card__title">{{ item.title }}</h3>
        <ul class="card__meta">
          <li class="card__meta-item">
            {{ new Date(item.date).toLocaleDateString() }}
          </li>
          <li class="card__meta-item">{{ item.author }}</li>
        </ul>
        <p class="card__description">{{ item.body }}</p>
      </article>
    </section>
  </main>
  <page-footer></page-footer>
</template>

<script>
import PageHeader from "@/widgets/header/index.ts";
import PageFooter from "@/widgets/footer/index.ts";
import axios from "axios";

const mockPost = (post) => ({
  ...post,
  img: `https://picsum.photos/seed/${post.id}/540/352?grayscale`,
  author: "CNN Indonesia",
  date: new Date(2022, 2, post.id).toISOString(),
});

export default {
  components: {
    PageHeader,
    PageFooter,
  },
  methods: {
    async fetchPosts() {
      try {
        setTimeout(async () => {
          const response = await axios.get(
            "https://jsonplaceholder.typicode.com/posts?_limit=10"
          );
          this.news = response.data.map(mockPost);
        }, 1000);
      } catch (e) {
        alert(`Error: ${e}`);
      }
    },
  },
  mounted() {
    this.fetchPosts();
  },
  data() {
    return {
      isActive: true,
      news: [],
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../app/styles/variables";
@import "../app/styles/mixins";

.page {
  @include wrapper;

  padding: 8px 0 16px;

  @include md {
    padding: 16px 0 32px;
  }
  @include xl {
    padding: 40px 0 80px;
  }

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
}

.news {
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
