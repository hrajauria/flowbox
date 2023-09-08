import { imagesDetailsAPIResponseMock } from "../../data/mocks/imagesAPIResponseMock";
import { FlowboxState, FlowboxProvider } from "../../context/context";
import { ImageLayoutEnum } from "../../types/enum/ImageLayoutEnum";
import { NavBar } from "./NavBar";
import { act, render, screen } from "@testing-library/react";
import * as react from "react";

test("should render the nav bar", () => {
  const initialState: FlowboxState = {
    images: imagesDetailsAPIResponseMock,
    layout: ImageLayoutEnum.List,
    isLoading: true,
    error: null,
    pageNumber: 1,
  };
  render(
    <FlowboxProvider initialState={initialState}>
      <NavBar />
    </FlowboxProvider>
  );
  const navBar = screen.getByTestId("navBar");
  expect(navBar).toBeInTheDocument();
  const flowboxLogo = screen.getByTestId("flowboxLogo");
  expect(flowboxLogo).toBeInTheDocument();
  const refreshIcon = screen.getByTestId("refreshIcon");
  expect(refreshIcon).toBeInTheDocument();
});

test("should trigger dispatch on click of refresh button", () => {
  const dispatch = jest.fn();
  jest.spyOn(react, "useReducer").mockImplementation(() => {
    return [{}, dispatch];
  });
  const initialState: FlowboxState = {
    images: imagesDetailsAPIResponseMock,
    layout: ImageLayoutEnum.List,
    isLoading: true,
    error: null,
    pageNumber: 1,
  };
  render(
    <FlowboxProvider initialState={initialState}>
      <NavBar />
    </FlowboxProvider>
  );
  const refreshIcon = screen.getByTestId("refreshIcon");
  act(() => {
    refreshIcon.click();
  });
  expect(dispatch).toHaveBeenCalled();
  jest.clearAllMocks();
});
