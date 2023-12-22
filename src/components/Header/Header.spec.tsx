import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Header from "./index";

describe("Header component", () => {
  test("renders DevFeed text", () => {
    render(<Header />);
    const devFeedText = screen.getByText(/DevFeed/i);
    expect(devFeedText).toBeInTheDocument();
  });

  test("calls handleSearch on input change", () => {
    const mockHandleSearch = jest.fn();
    render(<Header handleSearch={mockHandleSearch} />);
    const searchInput = screen.getByPlaceholderText(/Search…/i);
    if (mockHandleSearch) {
      fireEvent.change(searchInput, { target: { value: "test" } });
      expect(mockHandleSearch).toHaveBeenCalledWith("test");
    }
  });

  test("renders search icon when handleSearch is provided", () => {
    render(<Header handleSearch={() => {}} />);
    const searchIcon = screen.getByTestId("search-icon");
    expect(searchIcon).toBeInTheDocument();
  });

  test("does not render search icon when handleSearch is not provided", () => {
    render(<Header />);
    const searchIcon = screen.queryByTestId("search-icon");
    expect(searchIcon).not.toBeInTheDocument();
  });
});
