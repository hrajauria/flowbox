import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Flowbox } from "./pages/Flowbox/Flowbox";
import { FlowboxProvider, FlowboxState } from "./context/context";
import { ImageLayoutEnum } from "./types/enum/ImageLayoutEnum";
import { useEffect, useState } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { toast } from "react-toastify";

function App() {
  const [error, setError] = useState<Error | undefined>(undefined);
  const handleError = async (err: Error) => {
    setError(err);
  };

  useEffect(() => {
    toast.error(error?.message || "Error loading the application");
  }, [error]);

  const initialState: FlowboxState = {
    images: [],
    layout: ImageLayoutEnum.Grid,
    isLoading: true,
    error: null,
    pageNumber: 1,
  };

  /* 
    Things that could be done - 
      1. Login page should be added for authentication of the application
      2. A theme provider can be created with color pallette options and size functions to have 
        a constant look for the application
      3. React error boundary should be implemented to catch all errors from anywhere in the component tree.
  */
  return (
    <ErrorBoundary
      onError={handleError}
      fallback={
        <FlowboxProvider initialState={initialState}>
          <BrowserRouter>
            <Routes>
              <Route
                path="/"
                element={<Flowbox appError={error !== undefined} />}
              ></Route>
            </Routes>
          </BrowserRouter>
        </FlowboxProvider>
      }
    >
      <FlowboxProvider initialState={initialState}>
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={<Flowbox appError={error !== undefined} />}
            ></Route>
          </Routes>
        </BrowserRouter>
      </FlowboxProvider>
    </ErrorBoundary>
  );
}

export default App;
