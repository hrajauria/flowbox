import { useFetchImages } from "./useFetchImages";
import * as getImages from "../data/api/getImages";
import { act, renderHook } from "@testing-library/react";
import {
  imageAPIResponseMock,
  imagesDetailsAPIResponseMock,
} from "../data/mocks/imagesAPIResponseMock";

test("should set error when there is an from the getImages method", () => {
  jest
    .spyOn(getImages, "getImages")
    .mockImplementationOnce((pageNumber: number) => {
      return Promise.resolve({
        status: 404,
      } as Response);
    });
  const { result } = renderHook(() => useFetchImages());
  expect(result.current.error).toBeNull();
  expect(result.current.isLoading).toBe(true);
  act(() => {
    result.current.fetchImages(1);
  });
  expect(result.current.error).not.toBeNull();
  jest.clearAllMocks();
});

test("should set images when there is a response from the getImages method", () => {
  jest
    .spyOn(getImages, "getImages")
    .mockImplementationOnce((pageNumber: number) => {
      return Promise.resolve({
        ok: true,
        status: 200,
        json: async () => {
          return imageAPIResponseMock;
        },
      } as Response);
    });
  const { result } = renderHook(() => useFetchImages());
  act(async () => {
    result.current.fetchImages(1);
  });
  expect(result.current.images.length).toBe(
    imagesDetailsAPIResponseMock.length
  );
  jest.clearAllMocks();
});
