// Import necessary dependencies and libraries for testing
import React from "react"; // Import React to use it in the test
import { render, waitFor, screen } from "@testing-library/react"; // Import testing utilities from React Testing Library
import "@testing-library/jest-dom/extend-expect"; // Extend Jest's expect with matchers for DOM elements
import fetchMock from "jest-fetch-mock"; // Use jest-fetch-mock to mock API calls

import Posts from "../pages/posts/Posts"; // Import the Posts you want to test

// Setup for the mocking of API calls
beforeEach(() => {
  fetchMock.enableMocks(); // Enable mocking of fetch requests
  fetchMock.resetMocks(); // Reset mock fetch calls before each test
});

// Test case: it fetches and displays data
test("it fetches and displays data", async () => {
  // Define sample data to be returned by the mock API call
  const testData = [
    { id: 1, title: "Post 1" },
    { id: 2, title: "Post 2" },
  ];

  // Mock the API response with the defined sample data
  fetchMock.mockResponseOnce(JSON.stringify(testData));

  // Render the Posts component
  render(<Posts />);

  // Wait for asynchronous operations to complete (in this case, data fetching)
  await waitFor(() => {
    // Check that the component rendered the expected content
    expect(screen.getByText("POSTS")).toBeInTheDocument();
    expect(screen.getAllByRole("listitem")).toHaveLength(2);

    // Check that each item in the sample data is displayed
    testData.forEach((post) => {
      expect(screen.getByText(post.title)).toBeInTheDocument();
    });
  });
});

// Test case: it handles fetch errors
test("it handles fetch errors", async () => {
  // Mock a fetch error by rejecting the API call
  fetchMock.mockReject(new Error("Failed to fetch data"));

  // Render the Posts component
  render(<Posts />);

  // Wait for asynchronous operations to complete (in this case, error handling)
  await waitFor(() => {
    // Check that the error message is displayed
    expect(screen.getByText("Error: Failed to fetch data")).toBeInTheDocument();
  });
});
