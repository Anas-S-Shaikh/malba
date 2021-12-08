import {
  Box,
  Container,
  Divider,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import Product from "../../Components/Cards.js/ProductCard";
import zigzag from "../../assets/images/zig-zag.jpeg";
import dumbell from "../../assets/images/dumble-shape.jpg";
import { v4 as uuid } from "uuid";
import CategoryCard from "../../Components/Cards.js/CategoryCard";
import cement from "../../assets/images/cement2.jpg";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Loader from "../../Components/Loader/Loader";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    simmulateLoading();
  }, []);

  const simmulateLoading = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 700);
  };

  const handleProductClick = (id) => {
    navigate(`/product-details/${id}`);
  };
  return (
    <>
      <Container maxWidth={false}>
        <Box
          sx={{
            display: "flex",
          }}
        >
          {selectedCategory && (
            <IconButton
              onClick={() => {
                simmulateLoading();
                setSelectedCategory(null);
              }}
            >
              <ArrowBackIcon />
            </IconButton>
          )}
          <Typography sx={{ m: 1 }} variant="h4" color="text.primary">
            {selectedCategory ? selectedCategory : "All Products"}
          </Typography>
        </Box>
        <Divider
          sx={{
            mt: 1,
            mb: 2,
          }}
        />

        {loading ? (
          <Loader />
        ) : !selectedCategory ? (
          <>
            <Typography
              sx={{ m: 1 }}
              variant="h5"
              color="neutral.700"
              // textAlign="center"
            >
              Choose the category
            </Typography>
            <Grid container spacing={2}>
              <Grid item xl={3} sm={6} xs={12}>
                <CategoryCard
                  onClick={() => {
                    simmulateLoading();
                    setSelectedCategory("Cement");
                  }}
                  backgroundImage={cement}
                  title="Cement"
                  desc="Lizards are a widespread group of squamate reptiles, with over
              6,000 species."
                  subtitle="widespread group of squamate reptiles"
                />
              </Grid>
              <Grid item xl={3} sm={6} xs={12}>
                <CategoryCard
                  onClick={() => {
                    simmulateLoading();
                    setSelectedCategory("Aggregate");
                  }}
                  backgroundImage={cement}
                  title="Aggregate"
                  desc="Lizards are a widespread group of squamate reptiles, with over
            6,000 species."
                  subtitle="widespread group of squamate reptiles"
                />
              </Grid>
              <Grid item xl={3} sm={6} xs={12}>
                <CategoryCard
                  onClick={() => {
                    simmulateLoading();
                    setSelectedCategory("Tiles");
                  }}
                  backgroundImage={cement}
                  title="Tiles"
                  desc="Lizards are a widespread group of squamate reptiles, with over
            6,000 species."
                  subtitle="widespread group of squamate reptiles"
                />
              </Grid>
              <Grid item xl={3} sm={6} xs={12}>
                <CategoryCard
                  onClick={() => {
                    simmulateLoading();
                    setSelectedCategory("TMT Steels");
                  }}
                  backgroundImage={cement}
                  title="TMT Steels"
                  desc="Lizards are a widespread group of squamate reptiles, with over
            6,000 species."
                  subtitle="widespread group of squamate reptiles"
                />
              </Grid>
            </Grid>
          </>
        ) : (
          <Grid container spacing={3}>
            {data.map((product) => (
              <Grid key={product.id} item xl={3} lg={4} sm={6} xs={12}>
                <Product
                  onClick={() => handleProductClick(product.id)}
                  title={product.title}
                  imgSrc={product.imgSrc}
                  desc={product.desc}
                  price={product.price}
                  offer={product.offer}
                />
              </Grid>
            ))}
          </Grid>
        )}
      </Container>
    </>
  );
};

export default AllProducts;
