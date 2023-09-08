import { imagesDetailsAPIResponseMock } from "../../data/mocks/imagesAPIResponseMock";
import { CarouselLayout } from "./CarouselLayout";
import { act, render, screen } from "@testing-library/react";

test("should render the carousel layout", () => {
  render(<CarouselLayout images={imagesDetailsAPIResponseMock} />);
  const carouselLayoutBox = screen.getByTestId("carouselLayoutBox");
  expect(carouselLayoutBox).toBeInTheDocument();
  const carouselLayoutPreviousButton = screen.getByTestId(
    "carouselLayoutPreviousButton"
  );
  expect(carouselLayoutPreviousButton).toBeInTheDocument();
  const carouselLayoutNextButton = screen.getByTestId(
    "carouselLayoutNextButton"
  );
  expect(carouselLayoutNextButton).toBeInTheDocument();
  expect(carouselLayoutPreviousButton).toBeDisabled();
  const carouselLayoutImageCardItem = screen.getAllByTestId(
    "carouselLayoutImageCardItem"
  );
  expect(carouselLayoutImageCardItem.length).toBe(4);
});

test("should change images when next image button is clicked", () => {
  render(<CarouselLayout images={imagesDetailsAPIResponseMock} />);
  const carouselLayoutImageCardMedia = screen.getAllByTestId(
    "carouselLayoutImageCardMedia"
  );
  expect(carouselLayoutImageCardMedia[0].getAttribute("alt")).toBe(
    imagesDetailsAPIResponseMock[0].id.toString()
  );
  const carouselLayoutNextButton = screen.getByTestId(
    "carouselLayoutNextButton"
  );
  act(() => {
    carouselLayoutNextButton.click();
  });
  expect(carouselLayoutImageCardMedia[0].getAttribute("alt")).toBe(
    imagesDetailsAPIResponseMock[1].id.toString()
  );
});
