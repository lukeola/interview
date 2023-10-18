import { render, screen } from "@testing-library/react";
import Home from "../src/pages/home/Home";

test("HomePage renders correctly", () => {
  render(<Home />);
  const titleElement = screen.getByText(
    /Interview Project: Building a ReactJS Application with API Integration/i
  );
  const introElement = screen.getByText(
    /This is a simple ReactJS application that connects to a RESTful API to display data from an external service./i
  );

  expect(titleElement).toBeInTheDocument();
  expect(introElement).toBeInTheDocument();
});
