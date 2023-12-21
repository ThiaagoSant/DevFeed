import { Post, Comment } from "../../types/types";
import useGetPosts from "../../services/queries/useGetPosts";
import useGetComments from "../../services/queries/useGetComments";
import { useNavigate, useParams } from "react-router-dom";
import { RoutesEnum } from "../../types/enums";

export interface DetailsModel {
  post: Post | undefined;
  comments: Comment[] | undefined;
  navigateToHome(): void;
}

export const useDetailsModel = (): DetailsModel => {
  const navigate = useNavigate();
  const { postId } = useParams();

  const { data: postsData } = useGetPosts(postId);
  const { data: commentsData } = useGetComments(postId);

  const post: Post | undefined = Array.isArray(postsData)
    ? postsData[0]
    : postsData;

  const navigateToHome = () => navigate(RoutesEnum.Home);

  return { post, comments: commentsData, navigateToHome };
};
