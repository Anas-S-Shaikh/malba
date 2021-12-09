import {
  Box,
  Button,
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
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Loader from "../../Components/Loader/Loader";
import { useNavigate } from "react-router-dom";
import AddIcon from '@mui/icons-material/Add';

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
      <Container>
        <Box
          sx={{
            mb: 2,
          }}
        >
          <Button
            sx={{
              p: 0,
              color: "neutral.500",
            }}
            // color='neutral.400'
            onClick={() => {
              navigate("/products");
            }}
            startIcon={<ArrowBackIcon />}
          >
            All Products
          </Button>
        </Box>
        <Box
          sx={{
            mb: 4,
            display:'flex',
            justifyContent:'space-between'
          }}
        >
          <Typography variant="h4" color="text.primary">
            Tiles
          </Typography>
          <Button
            variant="outlined"
            endIcon={<AddIcon />}
            onClick={() => {
              navigate("/product/new");
            }}
          >
            Add Product
          </Button>
        </Box>

        {loading ? (
          <Loader />
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
