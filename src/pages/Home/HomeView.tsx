import Header from "../../components/Header";
import Container from "@mui/material/Container";
import PostList from "../../components/PostList";
import PaginationMUI from "../../components/Pagination";
import { HomeModel } from "./HomeModel";

interface HomeViewProps extends HomeModel {}

const HomeView = ({
  pagination,
  filteredPosts,
  currentPosts,
  ITEMS_PER_PAGE,
  updateFilteredPosts,
  setPagination,
}: HomeViewProps) => {
  return (
    <main>
      <Header handleSearch={updateFilteredPosts} />
      <Container
        maxWidth={"sm"}
        sx={{
          display: "flex",
          width: "100%",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <PostList posts={currentPosts} />

        {filteredPosts?.length ? (
          <PaginationMUI
            pagination={pagination}
            ITEMS_PER_PAGE={ITEMS_PER_PAGE}
            filteredPosts={filteredPosts}
            setPagination={setPagination}
          />
        ) : (
          "Nada encontrado em sua pesquisa ;("
        )}
      </Container>
    </main>
  );
};

export default HomeView;
