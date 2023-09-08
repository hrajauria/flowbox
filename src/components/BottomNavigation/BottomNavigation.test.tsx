import { act, render, screen } from "@testing-library/react";
import { BottomNavigation } from "./BottomNavigation";
import { actions } from "../../pages/Flowbox/Flowbox";
import * as useFetchImagesHook from "../../hooks/useFetchImages";
import { imagesDetailsAPIResponseMock } from "../../data/mocks/imagesAPIResponseMock";

beforeEach(() => {
  jest.clearAllMocks();
  jest.spyOn(useFetchImagesHook, "useFetchImages").mockImplementation(() => {
    return {
      fetchImages: jest.fn(),
      images: imagesDetailsAPIResponseMock,
      isLoading: false,
      error: null,
    };
  });
});

afterEach(() => {
  jest.clearAllMocks();
});

test("renders bottom navigation", () => {
  render(
    <BottomNavigation actions={actions} onBottomNavigationChange={jest.fn()} />
  );
  const bottomNavBar = screen.getByTestId("bottomNavBar");
  expect(bottomNavBar).toBeInTheDocument();
  const bottomNavMui = screen.getByTestId("bottomNavMui");
  expect(bottomNavMui).toBeInTheDocument();
  const bottomNavAction = screen.getAllByTestId("bottomNavAction");
  expect(bottomNavAction.length).toBe(4);
});

test("change layout based on nav item click", async () => {
  render(
    <BottomNavigation actions={actions} onBottomNavigationChange={jest.fn()} />
  );
  const bottomNavAction = screen.getAllByTestId("bottomNavAction");
  expect(bottomNavAction[1]).not.toHaveClass("Mui-selected");
  act(() => {
    bottomNavAction[1].click();
  });
  expect(bottomNavAction[1]).toHaveClass("Mui-selected");
});
