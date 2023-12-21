import React from "react";

import { Post } from "../../types";
import Header from "../../components/Header";
import PaginationMUI from "../../components/Pagination";

import Container from "@mui/material/Container";

import PostList from "../../components/PostList";
import useGetPosts from "../../services/queries/useGetPosts";

const Home = () => {
  const [pagination, setPagination] = React.useState<number>(1);
  const [filteredPosts, setFilteredPosts] = React.useState<Post[]>([]);
  const [searchTerm, setSearchTerm] = React.useState<string>("");

  const { data: posts } = useGetPosts(undefined);

  const ITEMS_PER_PAGE = 4;
  const startIndex = (pagination - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;

  const currentPosts = filteredPosts?.slice(startIndex, endIndex);

  const handleSearch = (term: string) => {
    setSearchTerm(term);
    setPagination(1);
  };

  React.useEffect(() => {
    if (Array.isArray(posts)) {
      const filtered = posts?.filter(
        (post: Post) =>
          post?.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
          post?.body?.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredPosts(filtered || []);
    }
  }, [posts, searchTerm]);

  return (
    <main>
      <Header handleSearch={handleSearch} />
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

export default Home;
