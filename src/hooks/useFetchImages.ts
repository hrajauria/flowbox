import { useState } from "react";
import { getImages } from "../data/api/getImages";
import { ImageDetailsAPIResponse } from "../types/ImageDetailsAPIResponse";
import { ImageAPIResponse } from "../types/ImageAPIResponse";

export function useFetchImages() {
  const [images, setImages] = useState<ImageDetailsAPIResponse[]>([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  async function fetchImages(pageNumber: number) {
    try {
      const response = await getImages(pageNumber);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const imageResponse: ImageAPIResponse = await response.json();
      setImages(imageResponse.hits);
      setLoading(false);
      setError(null);
    } catch (error: any) {
      console.log(error);
      setError(error);
      setLoading(false);
    }
  }

  return { fetchImages, images, isLoading, error };
}
