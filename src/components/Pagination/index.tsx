import React, { SetStateAction } from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

import { Post } from "../../types/types";

interface PaginationProps {
  pagination: number;
  filteredPosts: Post[];
  ITEMS_PER_PAGE: number;
  setPagination: React.Dispatch<SetStateAction<number>>;
}

const PaginationMUI = ({
  pagination,
  filteredPosts,
  ITEMS_PER_PAGE,
  setPagination,
}: PaginationProps) => {
  const handlePageChange = (_: React.ChangeEvent<unknown>, page: number) =>
    setPagination(page);

  return (
    <Stack spacing={0} sx={{ margin: "30px 0 10px 0", alignItems: "center" }}>
      <Pagination
        color="primary"
        count={Math.ceil(filteredPosts?.length / ITEMS_PER_PAGE)}
        page={pagination}
        onChange={handlePageChange}
      />
    </Stack>
  );
};

export default PaginationMUI;
