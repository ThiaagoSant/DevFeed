import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";

import Header from "../../components/Header";
import { DetailsModel } from "./DetailsModel";

interface DetailsView extends DetailsModel {}

const DetailsView = ({ post, comments, navigateToHome }: DetailsView) => {
  return (
    <>
      <Header />
      <Paper sx={{ p: 5 }}>
        <Typography variant="h4" gutterBottom>
          {post?.title}
        </Typography>
        <Typography variant="body1" paragraph>
          {post?.body}
        </Typography>
        <Button
          sx={{ margin: "0px 0 50px 0" }}
          variant="outlined"
          color="primary"
          onClick={navigateToHome}
        >
          Voltar para a Lista
        </Button>

        <Typography variant="h6" gutterBottom>
          Comentários
        </Typography>

        {comments?.map((comment) => (
          <div key={comment.id}>
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

export default DetailsView;
