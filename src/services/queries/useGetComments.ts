import { useQuery } from "react-query";

import { Api } from "../api/routes";

const getComments = async (postId: string | undefined) => {
  const { data } = await Api.getComments(postId);

  return data;
};

const useGetComments = (postId: string | undefined) =>
  useQuery(["comment", postId], () => getComments(postId));

export default useGetComments;
