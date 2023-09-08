import { ActionTypes, useFlowboxContext } from "../../context/context";
import { ImageLayoutEnum } from "../../types/enum/ImageLayoutEnum";
import { useFetchImages } from "../../hooks/useFetchImages";
import { Alert, Box, CircularProgress } from "@mui/material";
import { FlowboxContainer } from "../../components/FlowboxContainer/FlowboxContainer";
import { BottomNavigation } from "../../components/BottomNavigation/BottomNavigation";
import Grid3x3Icon from "@mui/icons-material/Grid3x3";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ViewCarouselIcon from "@mui/icons-material/ViewCarousel";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import { NavBar } from "../../components/NavBar/NavBar";
import { GridLayout } from "../../components/GridLayout/GridLayout";
import { CardsLayout } from "../../components/CardsLayout/CardsLayout";
import { ListLayout } from "../../components/ListLayout/ListLayout";
import { CarouselLayout } from "../../components/CarouselLayout/CarouselLayout";
import { useEffect } from "react";

export const actions = [
  {
    label: ImageLayoutEnum.Grid.toString(),
    icon: <Grid3x3Icon />,
  },
  {
    label: ImageLayoutEnum.Carousel.toString(),
    icon: <ViewCarouselIcon />,
  },
  {
    label: ImageLayoutEnum.List.toString(),
    icon: <FormatListBulletedIcon />,
  },
  {
    label: ImageLayoutEnum.Cards.toString(),
    icon: <DashboardIcon />,
  },
];

export function Flowbox({ appError }: { appError: boolean }) {
  const { dispatch, state } = useFlowboxContext();
  const { fetchImages, images, isLoading, error } = useFetchImages();
  useEffect(() => {
    fetchImages(state.pageNumber);
  }, [state.pageNumber]);

  useEffect(() => {
    dispatch({ type: ActionTypes.Load_Images, payload: images });
  }, [images]);

  const onBottomNavigationChange = (layout: ImageLayoutEnum) => {
    dispatch({ type: ActionTypes.Change_Layout, payload: layout });
  };

  return appError ? (
    <FlowboxContainer>
      <NavBar />
      <Alert severity="error" data-testid="alertFromAppError">
        There is an error while loading the application.
      </Alert>
    </FlowboxContainer>
  ) : (
    <>
      <FlowboxContainer>
        <NavBar />
        {(isLoading || error) && (
          <Box
            sx={{
              height: "calc(100vh - 56px - 56px)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {isLoading && (
              <CircularProgress
                sx={{
                  padding: "10px",
                }}
                data-testid="circularProgress"
              />
            )}
            {error && (
              <Alert severity="error" data-testid="alertFromError">
                There is an error while loading the images.
              </Alert>
            )}
          </Box>
        )}
        {!isLoading && !error && images.length > 0 && (
          <Box
            sx={{
              maxHeight: "calc(100vh - 56px - 56px)",
              overflowY: "scroll",
              height: "100%",
            }}
            data-testid="layoutBox"
          >
            {state.layout === ImageLayoutEnum.Grid && (
              <GridLayout images={state.images} />
            )}
            {state.layout === ImageLayoutEnum.Cards && (
              <CardsLayout images={state.images} />
            )}
            {state.layout === ImageLayoutEnum.Carousel && (
              <CarouselLayout images={state.images} />
            )}
            {state.layout === ImageLayoutEnum.List && (
              <ListLayout images={state.images} />
            )}
          </Box>
        )}
        <BottomNavigation
          actions={actions}
          onBottomNavigationChange={onBottomNavigationChange}
        />
      </FlowboxContainer>
    </>
  );
}
