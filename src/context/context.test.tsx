import { render } from "@testing-library/react";
import { NavBar } from "../components/NavBar/NavBar";

test("should throw error if useContext is called outside a provider", () => {
  expect(() => render(<NavBar />)).toThrowError(
    "useFlowboxContext must be used within a FlowboxProvider"
  );
});
