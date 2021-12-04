import { Box, Container, Typography } from "@mui/material";
import React from "react";

const AddProduct = () => {
  return (
    <>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 4,
        }}
      >
        <Container maxWidth={false}>
          <Typography sx={{ m: 1 }} variant="h4">
            Add New Product
          </Typography>
        </Container>
      </Box>
    </>
  );
};

export default AddProduct;
