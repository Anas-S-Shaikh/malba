import { Box, Container, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";
import CategoryCard from "../../Components/Cards.js/CategoryCard";
import cement from "../../assets/images/cement2.jpg";
import Loader from "../../Components/Loader/Loader";
import { useNavigate } from "react-router-dom";

const data = [
  {
    id: uuid(),
    title: "Aggregate",
    imgSrc: cement,
    desc: "Lizards are a widespread group of squamate reptiles, with over 6,000 species.",
    subtitle: "widespread group of squamate reptiles",
    offer: "50",
  },
  {
    id: uuid(),
    title: "Tiles",
    imgSrc: cement,
    desc: "Lizards are a widespread group of squamate reptiles, with over 6,000 species.",
    subtitle: "widespread group of squamate reptiles",
    offer: "29",
  },
  {
    id: uuid(),
    title: "TMT Steels",
    imgSrc: cement,
    desc: "Lizards are a widespread group of squamate reptiles, with over 6,000 species.",
    subtitle: "widespread group of squamate reptiles",
    offer: "50",
  },
];

const Categories = () => {
  const navigate = useNavigate();
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

  const handleCategoryClick = (id) => {
    navigate(`/products/${id}`);
  };
  return (
    <>
      <Container>
        <Box
          sx={{
            mb: 4,
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="h4" color="text.primary">
            All Services
          </Typography>
        </Box>

        {loading ? (
          <Loader />
        ) : (
          <>
            {/* <Typography sx={{ mb: 1 }} variant="h5" color="neutral.700">
              Choose the category
            </Typography> */}
            <Grid container spacing={2}>
              {data.map((category) => (
                <Grid item key={category.id} xl={3} sm={6} xs={12}>
                  <CategoryCard
                    onClick={() => {
                      handleCategoryClick(category.id);
                    }}
                    backgroundImage={category.imgSrc}
                    title={category.title}
                    desc={category.desc}
                    subtitle={category.subtitle}
                  />
                </Grid>
              ))}
            </Grid>
          </>
        )}
      </Container>
    </>
  );
};

export default Categories;
