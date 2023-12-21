import { useQuery } from "react-query";

import { Api } from "../api/routes";

const getPosts = async (postId: string | undefined) => {
  const { data } = await Api.getPosts(postId);

  return data;
};

const useGetPosts = (postId: string | undefined) =>
  useQuery(["post", postId], () => getPosts(postId));

export default useGetPosts;
