import { Container, Divider, Grid, Typography } from "@mui/material";
import React from "react";
import Product from "../../Components/Cards.js/ProductCard";
import zigzag from "../../assets/images/zig-zag.jpeg";
import dumbell from "../../assets/images/dumble-shape.jpg";
import { v4 as uuid } from "uuid";

const data = [
  {
    id: uuid(),
    title: "Zig-zag Tiles",
    imgSrc: zigzag,
    desc: "Lizards are a widespread group of squamate reptiles, with over 6,000 species.",
    price: "5000",
    offer: "50",
  },
  {
    id: uuid(),
    title: "Dumbell-shaped tiles",
    imgSrc: dumbell,
    desc: "Lizards are a widespread group of squamate reptiles, with over 6,000 species.",
    price: "2000",
    offer: "29",
  },
  {
    id: uuid(),
    title: "Zig-zag Tiles",
    imgSrc: zigzag,
    desc: "Lizards are a widespread group of squamate reptiles, with over 6,000 species.",
    price: "5000",
    offer: "50",
  },
  {
    id: uuid(),
    title: "Dumbell-shaped tiles",
    imgSrc: dumbell,
    desc: "Lizards are a widespread group of squamate reptiles, with over 6,000 species.",
    price: "2000",
    offer: "29",
  },
  {
    id: uuid(),
    title: "Zig-zag Tiles",
    imgSrc: zigzag,
    desc: "Lizards are a widespread group of squamate reptiles, with over 6,000 species.",
    price: "5000",
    offer: "50",
  },
];

const AllProducts = () => {
  return (
    <>
      <Container maxWidth={false}>
        <Typography sx={{ m: 1 }} variant="h4" color="text.primary">
          All Products
        </Typography>
        <Divider
          sx={{
            mt: 1,
            mb: 2,
          }}
        />
        <Grid container spacing={3}>
          {data.map((product) => (
            <Grid key={product.id} item xl={3} lg={4} sm={6} xs={12}>
              <Product
                title={product.title}
                imgSrc={product.imgSrc}
                desc={product.desc}
                price={product.price}
                offer={product.offer}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default AllProducts;
