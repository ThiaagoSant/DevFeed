import React, { useState, useEffect, SetStateAction } from "react";
import useGetPosts from "../../services/queries/useGetPosts";
import { Post } from "../../types/types";

export interface HomeModel {
  pagination: number;
  filteredPosts: Post[];
  currentPosts: Post[];
  searchTerm: string;
  ITEMS_PER_PAGE: number;
  updateFilteredPosts(term: string): void;
  setPagination: React.Dispatch<SetStateAction<number>>;
}

export const useHomeModel = (): HomeModel => {
  const [pagination, setPagination] = useState<number>(1);
  const [filteredPosts, setFilteredPosts] = useState<Post[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");

  const { data: posts } = useGetPosts(undefined);
  const ITEMS_PER_PAGE = 4;

  const startIndex = (pagination - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;

  const currentPosts = filteredPosts?.slice(startIndex, endIndex);

  const updateFilteredPosts = (term: string) => {
    setSearchTerm(term);
    setPagination(1);
  };

  useEffect(() => {
    if (!Array.isArray(posts)) return;

    const filtered = posts?.filter(
      (post) =>
        post?.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post?.body?.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredPosts(filtered || []);
  }, [posts, searchTerm]);

  return {
    pagination,
    filteredPosts,
    currentPosts,
    searchTerm,
    ITEMS_PER_PAGE,
    updateFilteredPosts,
    setPagination,
  };
};

export default useHomeModel;
