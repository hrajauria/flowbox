import { IconButton, Paper, styled } from "@mui/material";
import RefreshIcon from "@mui/icons-material/Refresh";
import { ActionTypes, useFlowboxContext } from "../../context/context";

const StyledImage = styled("img")(() => ({
  height: "auto",
  objectFit: "contain",
  margin: "5px",
}));

export function NavBar() {
  const { dispatch } = useFlowboxContext();
  return (
    <>
      <Paper
        elevation={3}
        sx={{
          height: "56px",
          display: "flex",
          flexDirection: "row",
          padding: "10px",
          justifyContent: "space-between",
        }}
        data-testid="navBar"
      >
        <StyledImage
          src="https://getflowbox.com/wp-content/uploads/2022/10/flowbox-logo.svg"
          alt="logo"
          data-testid="flowboxLogo"
        />
        <IconButton
          aria-label="refresh"
          onClick={() => dispatch({ type: ActionTypes.Refresh_Images })}
          data-testid="refreshIcon"
        >
          <RefreshIcon />
        </IconButton>
      </Paper>
    </>
  );
}
