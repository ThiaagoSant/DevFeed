import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";

import useGetPosts from "../../services/queries/useGetPosts";
import Header from "../../components/Header";
import { useNavigate, useParams } from "react-router-dom";
import useGetComments from "../../services/queries/useGetComments";

const Details = () => {
  const navigate = useNavigate();
  const { postId } = useParams();

  const { data: posts } = useGetPosts(postId);
  const { data: comments } = useGetComments(postId);

  return (
    <>
      <Header />
      <Paper sx={{ p: 5 }}>
        <Typography variant="h4" gutterBottom>
          {posts?.title}
        </Typography>
        <Typography variant="body1" paragraph>
          {posts?.body}
        </Typography>
        <Button
          sx={{ margin: "0px 0 50px 0" }}
          variant="outlined"
          color="primary"
          onClick={() => navigate("/")}
        >
          Voltar para a Lista
        </Button>

        <Typography variant="h6" gutterBottom>
          Comentários
        </Typography>

        {comments?.map((comment, index) => (
          <div key={index}>
            <Typography variant="subtitle1">Nome: {comment.name}</Typography>
            <Typography variant="subtitle1">
              Email:{" "}
              <Typography variant="caption" color="text.secondary">
                {comment.email}
              </Typography>
            </Typography>

            <Typography variant="body2">{comment.body}</Typography>
            <hr />
          </div>
        ))}
      </Paper>
    </>
  );
};

export default Details;
