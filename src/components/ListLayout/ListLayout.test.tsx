import { imagesDetailsAPIResponseMock } from "../../data/mocks/imagesAPIResponseMock";
import { ListLayout } from "./ListLayout";
import { render, screen } from "@testing-library/react";

test("should render the list layout", () => {
  render(<ListLayout images={imagesDetailsAPIResponseMock} />);
  const listLayoutBox = screen.getByTestId("listLayoutBox");
  expect(listLayoutBox).toBeInTheDocument();
  const listLayoutImageBox = screen.getAllByTestId("listLayoutImageBox");
  expect(listLayoutImageBox.length).toBe(imagesDetailsAPIResponseMock.length);
});
