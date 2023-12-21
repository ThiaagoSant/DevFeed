import { AxiosError } from "axios";
import { useQuery, UseQueryOptions } from "react-query";
import { Api, GetCommentsResponse } from "../api/routes";

type GetCommentsQueryKey = ["comment", string | undefined];

type GetAllCommentsOptions = UseQueryOptions<
  GetCommentsResponse,
  AxiosError,
  GetCommentsResponse,
  GetCommentsQueryKey
>;

const getComments = async (postId: string | undefined) => {
  const { data } = await Api.getComments(postId);
  return data;
};

const useGetComments = (
  postId: string | undefined,
  options?: GetAllCommentsOptions
) => useQuery(["comment", postId], () => getComments(postId), options);

export default useGetComments;
