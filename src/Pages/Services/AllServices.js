import { Box, Button, Container, Fab, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";
import CategoryCard from "../../Components/Cards.js/CategoryCard";
import masons_and_contractors from "../../assets/images/masons_and_contractors.jpg";
import professionals from "../../assets/images/professionals.jpg";
import home from "../../assets/images/home.jpg";
import Loader from "../../Components/Loader/Loader";
import { useNavigate } from "react-router-dom";
import AddIcon from '@mui/icons-material/Add';

const data = [
  {
    id: uuid(),
    title: "Masons and contractors",
    imgSrc: masons_and_contractors,
    desc: "Lizards are a widespread group of squamate reptiles, with over 6,000 species.",
    subtitle: "widespread group of squamate reptiles",
    offer: "50",
  },
  {
    id: uuid(),
    title: "Architects and engineers",
    imgSrc: professionals,
    desc: "Lizards are a widespread group of squamate reptiles, with over 6,000 species.",
    subtitle: "widespread group of squamate reptiles",
    offer: "29",
  },
  {
    id: uuid(),
    title: "Individual home builder",
    imgSrc: home,
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
    navigate(`/service-details/${id}`);
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

          <Button
            variant="outlined"
            sx={{
              display: { sm: "inline-flex", xs: "none" },
            }}
            endIcon={<AddIcon />}
            onClick={() => {
              navigate("/service/new");
            }}
          >
            Add Service
          </Button>
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
        <Fab
          sx={{
            position: "fixed",
            bottom: 16,
            right: 16,
            display: { sm: "none" },
          }}
          aria-label="Add Product"
          color="primary"
          onClick={() => {
            navigate("/product/new");
          }}
        >
          <AddIcon />
        </Fab>
      </Container>
    </>
  );
};

export default Categories;
