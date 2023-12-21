import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Post } from "../../types/types";

interface PostItemProps {
  post: Post;
  onViewMore(): void;
}

const PostItem = ({ post, onViewMore }: PostItemProps) => {
  const { title, body } = post;
  const MAX_CHARACTERS = 150;

  const truncatedBody =
    body.length > MAX_CHARACTERS ? `${body.slice(0, MAX_CHARACTERS)}...` : body;

  return (
    <Card sx={{ mb: 2 }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {truncatedBody}
        </Typography>
        <Button
          sx={{ marginTop: "20px" }}
          variant="contained"
          color="primary"
          onClick={() => onViewMore()}
        >
          Ver Mais
        </Button>
      </CardContent>
    </Card>
  );
};

export default PostItem;
