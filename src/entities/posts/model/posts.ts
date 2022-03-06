import { computed, toRefs, reactive } from "vue";
import { postsApi } from "@/shared/api/posts";
import {
  getSortFunction,
  getFilterFunction,
  adaptPost,
} from "@/entities/posts/model/helpers";

export enum SortType {
  Up = 1,
  Down = 2,
}

const state = reactive({
  posts: [],
  isLoading: false,
  searchQuery: "",
  sortType: SortType.Up,
});

export default function usePostsModel() {
  const fetchPosts = async () => {
    state.isLoading = true;
    const response = await postsApi.getPosts(12);
    state.posts = response.data.map(adaptPost);
    state.isLoading = false;
  };

  const setSearchQuery = (value: string) => {
    state.searchQuery = value;
  };

  const setSortType = (value: SortType) => {
    state.sortType = value;
  };

  const displayedPosts = computed(() => {
    return state.posts
      .filter(getFilterFunction(state.searchQuery))
      .sort(getSortFunction(state.sortType));
  });

  const isPostsEmpty = computed(() => {
    return !displayedPosts.value.length && !state.isLoading;
  });

  return {
    ...toRefs(state),
    displayedPosts,
    isPostsEmpty,
    fetchPosts,
    setSearchQuery,
    setSortType,
  };
}
