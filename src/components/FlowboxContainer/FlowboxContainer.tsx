import { Box } from "@mui/material";
import { ReactNode } from "react";

export const FlowboxContainer = ({ children }: { children: ReactNode }) => {
  return (
    <Box
      data-testid={"flowboxContainer"}
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
      }}
    >
      {children}
    </Box>
  );
};
