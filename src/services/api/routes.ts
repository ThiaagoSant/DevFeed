import { Post, Comment } from "../../types/types";
import { api } from "./index";

type GetPostsResponse = Post[] | Post;
type GetCommentsResponse = Comment[];

export const Api = {
  getPosts: (postId: string | undefined) =>
    api.get<GetPostsResponse>(postId ? `posts/${postId}` : "posts"),
  getComments: (postId: string | undefined) =>
    api.get<GetCommentsResponse>(`/posts/${postId}/comments`),
};
