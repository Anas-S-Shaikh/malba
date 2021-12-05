import { Container, Typography } from "@mui/material";
import React from "react";

const AddProduct = () => {
  return (
    <>
      <Container maxWidth={false}>
        <Typography sx={{ m: 1 }} variant="h4">
          Add New Product
        </Typography>
      </Container>
    </>
  );
};

export default AddProduct;
