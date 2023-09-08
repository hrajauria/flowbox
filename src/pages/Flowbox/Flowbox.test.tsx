import { FlowboxState, FlowboxProvider } from "../../context/context";
import { imagesDetailsAPIResponseMock } from "../../data/mocks/imagesAPIResponseMock";
import { ImageLayoutEnum } from "../../types/enum/ImageLayoutEnum";
import { Flowbox } from "./Flowbox";
import * as useFetchImagesHook from "../../hooks/useFetchImages";
import { render, screen } from "@testing-library/react";

const useFetchImagesSpy = jest.spyOn(useFetchImagesHook, "useFetchImages");

afterEach(() => {
  jest.clearAllMocks();
});

test("should render layout box", () => {
  const initialState: FlowboxState = {
    images: imagesDetailsAPIResponseMock,
    layout: ImageLayoutEnum.List,
    isLoading: true,
    error: null,
    pageNumber: 1,
  };
  useFetchImagesSpy.mockImplementation(() => {
    return {
      fetchImages: jest.fn(),
      images: imagesDetailsAPIResponseMock,
      isLoading: false,
      error: null,
    };
  });
  render(
    <FlowboxProvider initialState={initialState}>
      <Flowbox appError={false} />
    </FlowboxProvider>
  );
  const layoutBox = screen.getByTestId("layoutBox");
  expect(layoutBox).toBeInTheDocument();
});

test("should load Circular Progress Component if isLoading is true", () => {
  const initialState: FlowboxState = {
    images: imagesDetailsAPIResponseMock,
    layout: ImageLayoutEnum.List,
    isLoading: true,
    error: null,
    pageNumber: 1,
  };
  useFetchImagesSpy.mockImplementation(() => {
    return {
      fetchImages: jest.fn(),
      images: imagesDetailsAPIResponseMock,
      isLoading: true,
      error: null,
    };
  });
  render(
    <FlowboxProvider initialState={initialState}>
      <Flowbox appError={false} />
    </FlowboxProvider>
  );
  const circularProgress = screen.getByTestId("circularProgress");
  expect(circularProgress).toBeInTheDocument();
});

test("should load Alert Component if there is an error from useFetchImageHook", () => {
  const initialState: FlowboxState = {
    images: imagesDetailsAPIResponseMock,
    layout: ImageLayoutEnum.List,
    isLoading: true,
    error: null,
    pageNumber: 1,
  };
  useFetchImagesSpy.mockImplementation(() => {
    return {
      fetchImages: jest.fn(),
      images: imagesDetailsAPIResponseMock,
      isLoading: false,
      error: new Error(),
    };
  });
  render(
    <FlowboxProvider initialState={initialState}>
      <Flowbox appError={false} />
    </FlowboxProvider>
  );
  const alertFromError = screen.getByTestId("alertFromError");
  expect(alertFromError).toBeInTheDocument();
});

test("should load Alert Component if there is an appError", () => {
  const initialState: FlowboxState = {
    images: imagesDetailsAPIResponseMock,
    layout: ImageLayoutEnum.List,
    isLoading: true,
    error: null,
    pageNumber: 1,
  };
  useFetchImagesSpy.mockImplementation(() => {
    return {
      fetchImages: jest.fn(),
      images: imagesDetailsAPIResponseMock,
      isLoading: false,
      error: null,
    };
  });
  render(
    <FlowboxProvider initialState={initialState}>
      <Flowbox appError={true} />
    </FlowboxProvider>
  );
  const alertFromAppError = screen.getByTestId("alertFromAppError");
  expect(alertFromAppError).toBeInTheDocument();
});

test("should load List Layout if state.layout is set to List", () => {
  const initialState: FlowboxState = {
    images: [],
    layout: ImageLayoutEnum.List,
    isLoading: true,
    error: null,
    pageNumber: 1,
  };
  useFetchImagesSpy.mockImplementation(() => {
    return {
      fetchImages: jest.fn(),
      images: imagesDetailsAPIResponseMock,
      isLoading: false,
      error: null,
    };
  });
  render(
    <FlowboxProvider initialState={initialState}>
      <Flowbox appError={false} />
    </FlowboxProvider>
  );
  const listLayoutBox = screen.getByTestId("listLayoutBox");
  expect(listLayoutBox).toBeInTheDocument();
});

test("should load Grid Layout if state.layout is set to Grid", () => {
  const initialState: FlowboxState = {
    images: [],
    layout: ImageLayoutEnum.Grid,
    isLoading: true,
    error: null,
    pageNumber: 1,
  };
  useFetchImagesSpy.mockImplementation(() => {
    return {
      fetchImages: jest.fn(),
      images: imagesDetailsAPIResponseMock,
      isLoading: false,
      error: null,
    };
  });
  render(
    <FlowboxProvider initialState={initialState}>
      <Flowbox appError={false} />
    </FlowboxProvider>
  );
  const gridLayoutContainer = screen.getByTestId("gridLayoutContainer");
  expect(gridLayoutContainer).toBeInTheDocument();
});

test("should load Carousel Layout if state.layout is set to Carousel", () => {
  const initialState: FlowboxState = {
    images: [],
    layout: ImageLayoutEnum.Carousel,
    isLoading: true,
    error: null,
    pageNumber: 1,
  };
  useFetchImagesSpy.mockImplementation(() => {
    return {
      fetchImages: jest.fn(),
      images: imagesDetailsAPIResponseMock,
      isLoading: false,
      error: null,
    };
  });
  render(
    <FlowboxProvider initialState={initialState}>
      <Flowbox appError={false} />
    </FlowboxProvider>
  );
  const carouselLayoutBox = screen.getByTestId("carouselLayoutBox");
  expect(carouselLayoutBox).toBeInTheDocument();
});

test("should load Cards Layout if state.layout is set to Cards", () => {
  const initialState: FlowboxState = {
    images: [],
    layout: ImageLayoutEnum.Cards,
    isLoading: true,
    error: null,
    pageNumber: 1,
  };
  useFetchImagesSpy.mockImplementation(() => {
    return {
      fetchImages: jest.fn(),
      images: imagesDetailsAPIResponseMock,
      isLoading: false,
      error: null,
    };
  });
  render(
    <FlowboxProvider initialState={initialState}>
      <Flowbox appError={false} />
    </FlowboxProvider>
  );
  const cardsLayoutContainer = screen.getByTestId("cardsLayoutContainer");
  expect(cardsLayoutContainer).toBeInTheDocument();
});
