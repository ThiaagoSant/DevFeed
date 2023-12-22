import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import PostItem from "./index";

const mockPost = {
  userId: 1,
  id: 1,
  title: "Test Title",
  body: "Test Body Content",
};

describe("PostItem component", () => {
  it("renders post title and body correctly", () => {
    render(<PostItem post={mockPost} onViewMore={() => {}} />);

    const titleElement = screen.getByText("Test Title");
    const bodyElement = screen.getByText("Test Body Content");

    expect(titleElement).toBeInTheDocument();
    expect(bodyElement).toBeInTheDocument();
  });

  it("truncates body text if it exceeds 150 characters", () => {
    const longBodyPost = {
      ...mockPost,
      body: "Lorem ipsum ".repeat(20),
    };

    render(<PostItem post={longBodyPost} onViewMore={() => {}} />);

    const truncatedBody = screen.getByText(/Lorem ipsum/i);
    const ellipsis = screen.getByText(/\.{3}/);

    expect(truncatedBody).toBeInTheDocument();
    expect(ellipsis).toBeInTheDocument();
  });

  it("calls onViewMore when 'Ver Mais' button is clicked", () => {
    const onViewMoreMock = jest.fn();
    render(<PostItem post={mockPost} onViewMore={onViewMoreMock} />);

    const viewMoreButton = screen.getByText("Ver Mais");
    fireEvent.click(viewMoreButton);

    expect(onViewMoreMock).toHaveBeenCalledTimes(1);
  });
});
