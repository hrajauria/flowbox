import { Box, Card, CardMedia, IconButton } from "@mui/material";
import { useState } from "react";
import { ImageDetailsAPIResponse } from "../../types/ImageDetailsAPIResponse";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

interface ICarouselLayout {
  images: ImageDetailsAPIResponse[];
}

export const CarouselLayout = ({ images }: ICarouselLayout) => {
  const [minIndex, setMinIndex] = useState(0);

  return (
    <Box
      sx={() => ({
        height: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      })}
      data-testid="carouselLayoutBox"
    >
      <IconButton
        aria-label="Previous Image"
        disabled={minIndex === 0}
        onClick={() => {
          setMinIndex(minIndex - 1);
        }}
        data-testid="carouselLayoutPreviousButton"
      >
        <ArrowBackIosIcon />
      </IconButton>
      {images.length > 0 &&
        images.slice(minIndex, minIndex + 4).map((img, index) => {
          return <ImageCardItem img={img} key={index} />;
        })}
      <IconButton
        aria-label="Next Image"
        disabled={images.length - minIndex === 4}
        onClick={() => {
          setMinIndex(minIndex + 1);
        }}
        data-testid="carouselLayoutNextButton"
      >
        <ArrowForwardIosIcon />
      </IconButton>
    </Box>
  );
};

const ImageCardItem = ({ img }: { img: ImageDetailsAPIResponse }) => {
  return (
    <Card
      sx={{ maxWidth: 345, margin: "10px" }}
      data-testid="carouselLayoutImageCardItem"
    >
      <CardMedia
        component="img"
        height="194"
        image={img.userImageURL}
        alt={img.id.toString()}
        data-testid="carouselLayoutImageCardMedia"
      />
    </Card>
  );
};
