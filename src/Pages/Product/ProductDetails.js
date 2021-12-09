import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import EditIcon from "@mui/icons-material/Edit";
import zigzag from "../../assets/images/zig-zag.jpeg";
import ConfirmAlert from "../../Components/Alert/ConfirmAlert";

const ProductDetails = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const { id } = useParams();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <ConfirmAlert
        open={open}
        onClose={handleClose}
        title="Are you sure?"
        msg={
          "You are about to delete this product, this process is irreversible. By accepting this product will be deleted permanently."
        }
        onSubmit={() => {
          navigate("/products/1c9d5555-9321-4749-87f6-45588c707fee");
        }}
      />
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
              navigate("/products/1c9d5555-9321-4749-87f6-45588c707fee");
            }}
            startIcon={<ArrowBackIcon />}
          >
            Tiles
          </Button>
        </Box>

        <Box
          sx={{
            mb: 4,
          }}
        >
          <Grid container justifyContent="space-between">
            <Grid item xl={3} sm={6} xs={12}>
              <Typography variant="h4" color="text.primary">
                Zigzag Tiles
              </Typography>
              <Box>
                <Typography color="textSecondary" gutterBottom variant="body1">
                  {id}
                </Typography>
              </Box>
            </Grid>
            <Grid item xl={3} sm={3} xs={12} textAlign="end">
              <Button
                variant="outlined"
                endIcon={<EditIcon />}
                onClick={() => {
                  navigate(
                    "/product/edit/1c9d5555-9321-4749-87f6-45588c707fee"
                  );
                }}
              >
                Edit
              </Button>
              <Button
                variant="outlined"
                color="error"
                endIcon={<EditIcon />}
                sx={{ ml: 1 }}
                onClick={handleClickOpen}
              >
                Delete
              </Button>
            </Grid>
          </Grid>
        </Box>

        <Card
          sx={{
            display: "flex",
          }}
        >
          <Grid container spacing={2}>
            <Grid item sm={4} xs={12}>
              <CardMedia component="div" sx={{ width: 350, m: "auto" }}>
                <Box
                  sx={{
                    height: "100%",
                    p: 2,
                    width: "100%",
                  }}
                >
                  <img src={zigzag} alt={"zigzag"} />
                </Box>
              </CardMedia>
            </Grid>

            <Grid item sm={8} xs={12}>
              <CardContent>
                <Grid container spacing={2}>
                  <Grid item xl={3} sm={3} xs={12}>
                    <Typography>ID</Typography>
                  </Grid>
                  <Grid item xl={3} sm={9} xs={12}>
                    <Typography color="textSecondary" variant="body1">
                      {id}
                    </Typography>
                  </Grid>
                </Grid>
                <Divider sx={{ my: 1 }} />
                <Grid container spacing={2}>
                  <Grid item xl={3} sm={3} xs={12}>
                    <Typography>Category</Typography>
                  </Grid>
                  <Grid item xl={3} sm={9} xs={12}>
                    <Typography color="textSecondary" variant="body1">
                      Tiles
                    </Typography>
                  </Grid>
                </Grid>
                <Divider sx={{ my: 1 }} />
                <Grid container spacing={2}>
                  <Grid item xl={3} sm={3} xs={12}>
                    <Typography>Description</Typography>
                  </Grid>
                  <Grid item xl={3} sm={9} xs={12}>
                    <Typography color="textSecondary" variant="body1">
                      Lizards are a widespread group of squamate reptiles, with
                      over 6,000 species.Lizards are a widespread group of
                      squamate reptiles, with over 6,000 species.
                    </Typography>
                  </Grid>
                </Grid>
                <Divider sx={{ my: 1 }} />
                <Grid container spacing={2}>
                  <Grid item xl={3} sm={3} xs={12}>
                    <Typography>Price</Typography>
                  </Grid>
                  <Grid item xl={3} sm={9} xs={12}>
                    <Typography color="textSecondary" variant="body1">
                      1345 /kg
                    </Typography>
                  </Grid>
                </Grid>
                <Divider sx={{ my: 1 }} />
                <Grid container spacing={2}>
                  <Grid item xl={3} sm={3} xs={12}>
                    <Typography>Quantity</Typography>
                  </Grid>
                  <Grid item xl={3} sm={9} xs={12}>
                    <Typography color="textSecondary" variant="body1">
                      100 kg
                    </Typography>
                  </Grid>
                </Grid>
                <Divider sx={{ my: 1 }} />
                <Grid container spacing={2}>
                  <Grid item xl={3} sm={3} xs={12}>
                    <Typography>Unit</Typography>
                  </Grid>
                  <Grid item xl={3} sm={9} xs={12}>
                    <Typography color="textSecondary" variant="body1">
                      Kilogram (kg)
                    </Typography>
                  </Grid>
                </Grid>
              </CardContent>
            </Grid>
          </Grid>
        </Card>
      </Container>
    </>
  );
};

export default ProductDetails;
