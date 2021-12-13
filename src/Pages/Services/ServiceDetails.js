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
  CardActions,
  Collapse,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import React, { useState } from "react";
import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import EditIcon from "@mui/icons-material/Edit";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import masons_and_contractors from "../../assets/images/masons_and_contractors.jpg";
import ConfirmAlert from "../../Components/Alert/ConfirmAlert";
import { ExpandLess, MoreVert } from "@mui/icons-material";
import DeleteIcon from "@mui/icons-material/Delete";
import InfoIcon from '@mui/icons-material/Info';
// import { Tooltip } from "chart.js";

const ServiceDetails = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
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
          "You are about to delete this service, this process is irreversible. By accepting this service will be deleted permanently."
        }
        onSubmit={() => {
          navigate("/services");
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
              navigate("/services");
            }}
            startIcon={<ArrowBackIcon />}
          >
            All Services
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
                Masons and contractors
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
                    "/service/edit/1c9d5555-9321-4749-87f6-45588c707fee"
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
                      "/service/edit/1c9d5555-9321-4749-87f6-45588c707fee"
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

        <Card>
          <CardMedia
            component="div"
            image={masons_and_contractors}
            sx={{ height: "300px" }}
          />

          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Description
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica.
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica.
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica.
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica.
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica.
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica.
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica.
            </Typography>
            <CardActions disableSpacing sx={{ px:0 }}>
              <ListItemButton onClick={handleExpandClick} sx={{ px:0 }}>
                {/* <ListItemIcon>
                  <InfoIcon />
                </ListItemIcon> */}
                <ListItemText primary="Other Details" />
                {expanded ? <ExpandLess /> : <ExpandMoreIcon />}
              </ListItemButton>
              {/* <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{ my: 2 }}
              >
                Other Details
              </Typography>
              <IconButton
                onClick={handleExpandClick}
                aria-label="other details"
                sx={{ ml: "auto" }}
              >
                <ExpandMoreIcon />
              </IconButton> */}
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>
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
            </Collapse>
          </CardContent>
        </Card>
      </Container>
    </>
  );
};

export default ServiceDetails;
