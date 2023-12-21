import { AxiosError } from "axios";
import { useQuery, UseQueryOptions } from "react-query";
import { Api, GetPostsResponse } from "../api/routes";

type GetPostsQueryKey = ["post", string | undefined];

type GetAllPostsOptions = UseQueryOptions<
  GetPostsResponse,
  AxiosError,
  GetPostsResponse,
  GetPostsQueryKey
>;

const getPosts = async (postId: string | undefined) => {
  const { data } = await Api.getPosts(postId);

  return data;
};

const useGetPosts = (
  postId: string | undefined,
  options?: GetAllPostsOptions
) => useQuery(["post", postId], () => getPosts(postId), options);

export default useGetPosts;
