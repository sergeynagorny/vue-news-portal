import { apiInstance } from "@/shared/api/posts/base";
import { AxiosResponse } from "axios";
import { Post } from "@/shared/api/posts/models";

const BASE_URL = "/posts";

export type GetPostsResponse = AxiosResponse & { data: Post[] };

export function getPosts(count: number): Promise<GetPostsResponse> {
  return apiInstance.get(BASE_URL, { params: { _limit: count } });
}
