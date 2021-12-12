import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Divider,
  Grid,
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
  Typography,
  Tooltip,
} from "@mui/material";
import React, { useState } from "react";
import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import EditIcon from "@mui/icons-material/Edit";
import zigzag from "../../assets/images/zig-zag.jpeg";
import ConfirmAlert from "../../Components/Alert/ConfirmAlert";
import { MoreVert, } from "@mui/icons-material";
import DeleteIcon from "@mui/icons-material/Delete";
// import { Tooltip } from "chart.js";

const ProductDetails = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
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
            <Grid item xl={3} sm={6} xs={10}>
              <Typography variant="h4" color="text.primary">
                Zigzag Tiles
              </Typography>
              <Box>
                <Typography color="textSecondary" gutterBottom variant="body1">
                  {id}
                </Typography>
              </Box>
            </Grid>
            <Grid item xl={3} sm={3} xs={2} textAlign="end">
              <Button
                variant="outlined"
                sx={{ display: { sm: "inline-flex", xs: "none" } }}
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
                sx={{ ml: 1, display: { sm: "inline-flex", xs: "none" } }}
                onClick={handleClickOpen}
              >
                Delete
              </Button>

              <Tooltip title="Account settings">
                <IconButton
                  onClick={(event) => setAnchorEl(event.currentTarget)}
                  size="small"
                  sx={{ ml: 2, display: { sm: "none" } }}
                >
                  <MoreVert />
                </IconButton>
              </Tooltip>
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={() => setAnchorEl(null)}
                onClick={() => setAnchorEl(null)}
                PaperProps={{
                  elevation: 0,
                  sx: {
                    overflow: "visible",
                    filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                    mt: 1.5,
                    "&:before": {
                      content: '""',
                      display: "block",
                      position: "absolute",
                      top: 0,
                      right: 14,
                      width: 10,
                      height: 10,
                      bgcolor: "background.paper",
                      transform: "translateY(-50%) rotate(45deg)",
                      zIndex: 0,
                    },
                  },
                }}
                transformOrigin={{ horizontal: "right", vertical: "top" }}
                anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
              >
                <MenuItem
                  onClick={() => {
                    navigate(
                      "/product/edit/1c9d5555-9321-4749-87f6-45588c707fee"
                    );
                  }}
                >
                  <ListItemIcon>
                    <EditIcon fontSize="small" />
                  </ListItemIcon>
                  Edit
                </MenuItem>
                <MenuItem onClick={handleClickOpen}>
                  <ListItemIcon>
                    <DeleteIcon color="error" fontSize="small" />
                  </ListItemIcon>
                  Delete
                </MenuItem>
              </Menu>
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
