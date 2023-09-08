import { imagesDetailsAPIResponseMock } from "../../data/mocks/imagesAPIResponseMock";
import { GridLayout } from "./GridLayout";
import { render, screen } from "@testing-library/react";

test("should render the list layout", () => {
  render(<GridLayout images={imagesDetailsAPIResponseMock} />);
  const gridLayoutContainer = screen.getByTestId("gridLayoutContainer");
  expect(gridLayoutContainer).toBeInTheDocument();
  const gridLayoutItem = screen.getAllByTestId("gridLayoutItem");
  expect(gridLayoutItem.length).toBe(imagesDetailsAPIResponseMock.length);
});
