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
import React from "react";
import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import EditIcon from "@mui/icons-material/Edit";
import zigzag from "../../assets/images/zig-zag.jpeg";

const ProductDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
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
              navigate("/all-products");
            }}
            startIcon={<ArrowBackIcon />}
          >
            All Products
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
                  In Tiles
                </Typography>
                {/* <Typography> In Cement </Typography> */}
              </Box>
            </Grid>
            <Grid item xl={3} sm={3} xs={12} textAlign="end">
              <Button variant="outlined" endIcon={<EditIcon />}>
                Edit
              </Button>
              <Button
                variant="outlined"
                color="error"
                endIcon={<EditIcon />}
                sx={{ ml: 1 }}
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
