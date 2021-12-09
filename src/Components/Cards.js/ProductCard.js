import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, CardActionArea } from "@mui/material";

export default function ProductCard({
  imgSrc,
  title,
  desc,
  price,
  offer,
  onClick,
}) {
  return (
    <Card
      sx={{
        // maxWidth: 325,
        "&:hover": {
          backgroundColor: "neutral.100",
        },
      }}
    >
      <CardActionArea onClick={onClick}>
        <CardMedia component="div">
          <Box
            sx={{
              height: 145,
              p: 2,
            }}
          >
            <img src={imgSrc} alt={title} />
          </Box>
        </CardMedia>
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            textAlign="center"
          >
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary" textAlign="center">
            {desc}
          </Typography>
          <Typography variant="subtitle1" textAlign="center" sx={{ mt: 1 }}>
            Rs. {price} ({offer}% off)
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
