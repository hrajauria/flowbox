import { render, screen } from "@testing-library/react";
import App from "./App";

test("should render the nav bar", () => {
  render(<App />);
  const navBar = screen.getByTestId("navBar");
  expect(navBar).toBeInTheDocument();
});

test("should renders the bottom nav bar", () => {
  render(<App />);
  const bottomNavBar = screen.getByTestId("bottomNavBar");
  expect(bottomNavBar).toBeInTheDocument();
});
