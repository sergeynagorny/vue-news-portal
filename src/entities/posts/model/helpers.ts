import { Post } from "@/shared/api/posts/models";
import { SortType } from "@/entities/posts";

export const adaptPost = (post: Omit<Post, "img" | "author" | "date">) => ({
  ...post,
  img: `https://picsum.photos/seed/${post.id}/540/352?grayscale`,
  author: "CNN Indonesia",
  date: new Date(2022, 2, post.id).toISOString(),
});

export const getFilterFunction = (searchQuery: string) => {
  return (post: Post) =>
    post.title?.toLowerCase().includes(searchQuery.toLowerCase());
};

export const getSortFunction = (sortType: SortType) => {
  switch (sortType) {
    case SortType.Up:
      return (p1: Post, p2: Post) => p2["date"].localeCompare(p1["date"]);
    case SortType.Down:
      return (p1: Post, p2: Post) => p1["date"].localeCompare(p2["date"]);
  }
};
