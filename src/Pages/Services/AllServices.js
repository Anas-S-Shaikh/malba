import { Container, Typography } from "@mui/material";
import React from "react";

const AllProducts = () => {
  return (
    <>
      <Container maxWidth={false}>
        <Typography sx={{ m: 1 }} variant="h4">
          All Services
        </Typography>
      </Container>
    </>
  );
};

export default AllProducts;
