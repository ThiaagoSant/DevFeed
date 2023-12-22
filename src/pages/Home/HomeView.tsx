import Header from "../../components/Header";
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

      <PostList posts={currentPosts} />

      {filteredPosts?.length > 0 && (
        <PaginationMUI
          pagination={pagination}
          ITEMS_PER_PAGE={ITEMS_PER_PAGE}
          filteredPosts={filteredPosts}
          setPagination={setPagination}
        />
      )}
    </main>
  );
};

export default HomeView;
