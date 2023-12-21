import List from "@mui/material/List";
import PostItem from "../PostItem";
import { Post } from "../../types/types";
import { useNavigate } from "react-router-dom";

interface PostListProps {
  posts: Post[];
}

export default function PostList({ posts }: PostListProps) {
  const navigate = useNavigate();
  const renderPosts = posts?.map((post) => {
    const { id } = post;

    return (
      <PostItem
        key={id}
        post={post}
        onViewMore={() => navigate(`/details/${id}`)}
      />
    );
  });

  return (
    <List
      sx={{
        width: "100%",
        maxWidth: "100vw",
        bgcolor: "background.paper",
        margin: "20px 0 30px 0",
      }}
    >
      {renderPosts}
    </List>
  );
}
