import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import { ImageDetailsAPIResponse } from "../../types/ImageDetailsAPIResponse";

interface ICardsLayout {
  images: ImageDetailsAPIResponse[];
}

export function CardsLayout({ images }: ICardsLayout) {
  return (
    <>
      <Grid
        container
        spacing={1}
        sx={{
          justifyContent: "center",
          margin: "0 10px 10px 10px",
          padding: "0 0 0 10px",
        }}
        data-testid="cardsLayoutContainer"
      >
        {images.length > 0 &&
          images.map((img) => {
            return <CardItemComponent img={img} key={img.id} />;
          })}
      </Grid>
    </>
  );
}

function CardItemComponent({ img }: { img: ImageDetailsAPIResponse }) {
  return (
    <Grid
      item
      xs={6}
      md={4}
      lg={2}
      sx={{
        margin: "5px",
      }}
      data-testid="cardsLayoutItem"
    >
      <Card sx={{ maxWidth: 345 }} data-testid="cardsLayoutCard">
        <CardMedia
          component="img"
          height="194"
          image={img.userImageURL}
          alt={img.id.toString()}
          data-testid="cardsLayoutCardMedia"
        />
        <CardContent data-testid="cardsLayoutCardContent">
          <Typography variant="body2" color="text.secondary">
            ID : {img.id}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Height : {img.imageHeight}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Width : {img.imageWidth}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Size : {img.imageSize}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
}
