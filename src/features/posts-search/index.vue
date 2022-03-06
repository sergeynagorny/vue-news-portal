<template>
  <div class="post-search">
    <input
      v-focus
      v-if="isSearchVisible"
      v-model="searchQuery"
      @input="setSearchQuery(searchQuery)"
      placeholder="Search..."
      class="post-search__input"
    />
    <ui-button
      :icon="isSearchVisible ? 'close' : 'search'"
      @click="toggleSearch"
      type="ghost"
    ></ui-button>
  </div>
</template>

<script>
import usePostsModel from "@/entities/posts/model/posts";
import { ref } from "vue";

export default {
  setup() {
    const { searchQuery, setSearchQuery } = usePostsModel();

    const isSearchVisible = ref(false);

    const toggleSearch = () => {
      isSearchVisible.value = !isSearchVisible.value;
      setSearchQuery("");
    };

    return { searchQuery, isSearchVisible, toggleSearch, setSearchQuery };
  },
};
</script>

<style lang="scss" scoped>
.post-search {
  display: flex;
  gap: 5px;

  .post-search__input {
    max-width: 100px;
  }
}
</style>
