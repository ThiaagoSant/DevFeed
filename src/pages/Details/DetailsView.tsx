import { Typography, Paper, Button, Avatar, Box, Grid } from "@mui/material";
import { styled } from "@mui/system";
import Header from "../../components/Header";
import { DetailsModel } from "./DetailsModel";

const StyledContainer = styled(Grid)({
  padding: "20px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
});

const StyledPaper = styled(Paper)({
  padding: "20px",
  marginBottom: "20px",
  width: "100%",
  maxWidth: "600px",
  margin: "0",
});

const StyledButton = styled(Button)({
  marginTop: "20px",
  textTransform: "none",
  color: "#fff",
});

const CommentContainer = styled(Box)({
  marginBottom: "20px",
  padding: "20px",
  borderRadius: "8px",
  backgroundColor: "rgba(255, 255, 255, 0.8)",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  display: "flex",
  alignItems: "center",
});

const CommentAvatar = styled(Avatar)(({ theme }) => ({
  marginRight: "15px",
  backgroundColor: theme.palette.primary.main,
}));

const CommentContent = styled(Box)({
  flex: 1,
  display: "flex",
  flexDirection: "column",
});

const CommentText = styled(Typography)({
  marginBottom: "10px",
});

const DetailsView = ({ post, comments, navigateToHome }: DetailsModel) => {
  return (
    <>
      <Header />
      <StyledContainer container spacing={3}>
        <Grid sx={{ margin: "0 10px 0 -5px", padding: 0 }} item xs={12} md={6}>
          <StyledPaper>
            <Typography variant="h4" gutterBottom>
              {post?.title}
            </Typography>
            <Typography variant="body1" paragraph>
              {post?.body}
            </Typography>
            <StyledButton
              variant="contained"
              color="primary"
              onClick={navigateToHome}
            >
              Voltar para a Lista
            </StyledButton>
          </StyledPaper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h5" gutterBottom>
            Comentários
          </Typography>

          {comments?.map((comment) => (
            <CommentContainer key={comment.id}>
              <CommentAvatar>{comment.name[0]}</CommentAvatar>
              <CommentContent>
                <Typography variant="subtitle1">{comment.name}</Typography>
                <CommentText variant="body2">{comment.body}</CommentText>
              </CommentContent>
            </CommentContainer>
          ))}
        </Grid>
      </StyledContainer>
    </>
  );
};

export default DetailsView;
