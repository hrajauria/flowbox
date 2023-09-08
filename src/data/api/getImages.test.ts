import { mockFetchFailure, mockFetchSuccess } from "../mocks/mockFetch";
import { getImages } from "./getImages";

test("should return successful response", () => {
  const fetchSpy = jest
    .spyOn(window, "fetch")
    .mockImplementation(mockFetchSuccess);
  getImages(1);
  expect(fetchSpy).toBeCalled();
  jest.clearAllMocks();
});

test("should return failure response", () => {
  const fetchSpy = jest
    .spyOn(window, "fetch")
    .mockImplementation(mockFetchFailure);
  getImages(1);
  expect(fetchSpy).toBeCalled();
  jest.clearAllMocks();
});
