<template>
  <input
    v-focus
    v-if="isSearchVisible"
    v-model="searchQuery"
    @input="setSearchQuery(searchQuery)"
    placeholder="Search something..."
  />
  <ui-button
    :icon="isSearchVisible ? 'close' : 'search'"
    @click="toggleSearch"
    type="ghost"
  ></ui-button>
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
