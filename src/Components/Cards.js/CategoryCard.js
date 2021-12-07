import React from "react";
import { Card, CardContent, Typography, CardActionArea } from "@mui/material";

const CategoryCard = ({ title, desc, backgroundImage, subtitle, onClick }) => {
  return (
    <>
      <Card
        sx={{
          position: "relative",
          borderRadius: "0",
          backgroundColor: "neutral.900",
          color: "neutral.100",
          "&::before": {
            content: '""',
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "100%",
            width: "100%",
            position: "absolute",
            opacity: 0.7,
          },
        }}
      >
        <CardActionArea
          onClick={onClick}
          sx={{
            height: 250,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CardContent
            sx={{
            //   border: "1px solid white",
            }}
          >
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              textAlign="center"
            >
              {title}
            </Typography>
            <Typography variant="body2" textAlign="center">
              {desc}
            </Typography>
            <Typography variant="subtitle1" textAlign="center" sx={{ mt: 1 }}>
              {subtitle}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
};

export default CategoryCard;
