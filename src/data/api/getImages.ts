const API_KEY = "39270085-8c916b80b31d6d8ffc0f7bea9";

export async function getImages(pageNumber: number) {
  const response = await fetch(
    `https://pixabay.com/api/?key=${API_KEY}&per_page=20&page=${pageNumber}`
  );

  return response;
}
