import { imagesDetailsAPIResponseMock } from "../../data/mocks/imagesAPIResponseMock";
import { CardsLayout } from "./CardsLayout";
import { render, screen } from "@testing-library/react";

test("renders card layout", () => {
  render(<CardsLayout images={imagesDetailsAPIResponseMock} />);
  const cardsLayoutContainer = screen.getByTestId("cardsLayoutContainer");
  expect(cardsLayoutContainer).toBeInTheDocument();
  const cardsLayoutItem = screen.getAllByTestId("cardsLayoutItem");
  expect(cardsLayoutItem.length).toBe(imagesDetailsAPIResponseMock.length);
});
