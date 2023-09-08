import { ImageDetailsAPIResponse } from "./ImageDetailsAPIResponse";

export type ImageAPIResponse = {
  total: number;
  totalHits: number;
  hits: ImageDetailsAPIResponse[];
};
