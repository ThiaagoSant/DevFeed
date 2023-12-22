import React from "react";
import { render, screen } from "@testing-library/react";
import PostList from "./index";

const mockPosts = [
  { userId: 1, id: 1, title: "Test Title 1", body: "Test Body 1" },
  { userId: 1, id: 2, title: "Test Title 2", body: "Test Body 2" },
  { userId: 1, id: 3, title: "Test Title 3", body: "Test Body 3" },
];

jest.mock("react-router-dom", () => {
  const originalModule = jest.requireActual("react-router-dom");
  return {
    ...originalModule,
    useNavigate: jest.fn(),
  };
});

describe("PostList component", () => {
  it("renders PostItem for each post in the list", () => {
    render(<PostList posts={mockPosts} />);
    
    mockPosts.forEach((post) => {
      const titleElement = screen.getByText(post.title);
      const bodyElement = screen.getByText(post.body);

      expect(titleElement).toBeInTheDocument();
      expect(bodyElement).toBeInTheDocument();
    });
  });
});
