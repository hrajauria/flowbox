import { Grid } from "@mui/material";
import { ImageDetailsAPIResponse } from "../../types/ImageDetailsAPIResponse";

interface IGridLayout {
  images: ImageDetailsAPIResponse[];
}

export function GridLayout({ images }: IGridLayout) {
  return (
    <>
      <Grid
        container
        spacing={1}
        sx={{
          justifyContent: "center",
          margin: "10px",
        }}
        data-testid="gridLayoutContainer"
      >
        {images.length > 0 &&
          images.map((img) => {
            return <GridItemComponent img={img} key={img.id} />;
          })}
      </Grid>
    </>
  );
}

function GridItemComponent({ img }: { img: ImageDetailsAPIResponse }) {
  return (
    <Grid
      item
      xs={6}
      md={4}
      lg={2}
      sx={{
        margin: "5px",
      }}
      data-testid="gridLayoutItem"
      key={img.id}
    >
      <img src={img.userImageURL} alt={`${img.id}`} />
    </Grid>
  );
}
