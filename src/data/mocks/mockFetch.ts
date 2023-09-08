export async function mockFetchSuccess() {
  return {
    ok: true,
    status: 200,
    json: async () => {},
  } as Response;
}

export async function mockFetchFailure() {
  return {
    ok: false,
    status: 400,
  } as Response;
}
