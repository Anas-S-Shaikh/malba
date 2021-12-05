import { Container, Typography } from "@mui/material";
import React from "react";

const AddService = () => {
  return (
    <>
      <Container maxWidth={false}>
        <Typography sx={{ m: 1 }} variant="h4">
          Add New Service
        </Typography>
      </Container>
    </>
  );
};

export default AddService;
