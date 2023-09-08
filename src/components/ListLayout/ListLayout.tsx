import { Box, Card, Typography } from "@mui/material";
import { CardMedia } from "@mui/material";
import { ImageDetailsAPIResponse } from "../../types/ImageDetailsAPIResponse";

interface IListLayout {
  images: ImageDetailsAPIResponse[];
}

export function ListLayout({ images }: IListLayout) {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          padding: "10px",
        }}
        data-testid="listLayoutBox"
      >
        {images.length > 0 &&
          images.map((img) => {
            return (
              <Box
                sx={{
                  alignSelf: "center",
                  display: "flex",
                  flexDirection: "row",
                }}
                key={img.id}
                data-testid="listLayoutImageBox"
              >
                <Card
                  sx={{ maxWidth: 345, margin: "10px" }}
                  data-testid="listLayoutCard"
                >
                  <CardMedia
                    component="img"
                    height="194"
                    image={img.userImageURL}
                    alt={img.id.toString()}
                    data-testid="listLayoutCardMedia"
                  />
                </Card>
                <Box
                  sx={{
                    height: "198px",
                    display: "flex",
                    alignItems: "center",
                    padding: "5px",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                  data-testid="listLayoutTypographyBox"
                >
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    key="listLayoutTypographyID"
                  >
                    ID : {img.id}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    key="listLayoutTypographyHeight"
                  >
                    Height : {img.imageHeight}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    key="listLayoutTypographyWidth"
                  >
                    Width : {img.imageWidth}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    key="listLayoutTypographySize"
                  >
                    Size : {img.imageSize}
                  </Typography>
                </Box>
              </Box>
            );
          })}
      </Box>
    </>
  );
}
