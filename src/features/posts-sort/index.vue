<template>
  <ui-button
    v-if="!isPostsEmpty"
    @click="changeSortType"
    type="ghost"
    :icon="getIconBySortType(sortType)"
    >{{ getFirstPostDate(displayedPosts) }}</ui-button
  >
</template>

<script lang="ts">
import usePostsModel, { SortType } from "@/entities/posts/model/posts";
import { Post } from "@/shared/api/posts/models";

export default {
  methods: {
    getFirstPostDate(posts: Post[]) {
      const [firstPost] = posts;
      return this.parsedDate(firstPost?.date);
    },
    getIconBySortType(sortType: SortType) {
      const IconBySortType = {
        [SortType.Up]: "arrow-up-wide-short",
        [SortType.Down]: "arrow-down-wide-short",
      };

      return IconBySortType[sortType];
    },
    parsedDate(isoDate: string | undefined) {
      // TODO: looks like a helper

      if (!isoDate) return;

      const options: Intl.DateTimeFormatOptions = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      };

      return new Date(isoDate).toLocaleDateString("en-US", options);
    },
  },
  setup() {
    const { displayedPosts, isPostsEmpty, sortType, setSortType } =
      usePostsModel();

    const changeSortType = () => {
      setSortType(sortType.value === SortType.Up ? SortType.Down : SortType.Up);
    };

    return { displayedPosts, isPostsEmpty, sortType, changeSortType };
  },
};
</script>

<style scoped></style>
