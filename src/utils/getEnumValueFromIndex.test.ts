import { ImageLayoutEnum } from "../types/enum/ImageLayoutEnum";
import { getEnumValueFromIndex } from "./getEnumValueFromIndex";

test("should return undefined is an invalid index is passed", () => {
  const response = getEnumValueFromIndex(ImageLayoutEnum, -1);
  expect(response).toBeUndefined();
});
