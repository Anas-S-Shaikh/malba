import { PhotoCamera } from "@mui/icons-material";
import {
  Container,
  Typography,
  Card,
  CardContent,
  TextField,
  Grid,
  Button,
  CardActions,
  Autocomplete,
} from "@mui/material";
import { styled } from "@mui/styles";
import React, { useState, useEffect } from "react";
import AddBoxIcon from "@mui/icons-material/AddBox";
import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";
import SnackbarAlert from "../../Components/Snackbar/Snackbar";
const Input = styled("input")({
  display: "none",
});

const AddProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarmsg, setSnackbarmsg] = useState("");
  const [formFields, setFormFields] = useState({
    title: "",
    category: null,
    brand: "",
    manufacturer: "",
    productID: "",
    qty: "",
    price: "",
    unit: "",
    desc: "",
    images: "",
  });
  const [error, setError] = useState([]);

  useEffect(() => {
    if (id) {
      setFormFields({
        title: "Zigzag Tiles",
        category: { label: "Tiles", value: "Tiles" },
        brand: "",
        manufacturer: "",
        productID: id,
        qty: "100",
        price: "1345",
        unit: "kg",
        desc: "Lizards are a widespread group of squamate reptiles, with over 6,000 species.Lizards are a widespread group of squamate reptiles, with over 6,000 species.",
        images: "",
      });
    }
  }, [id]);

  const handleChange = (evt, newVal) => {
    const { name, value } = evt.target;
    setFormFields((prev) => {
      return {
        ...prev,
        [name]: newVal ? newVal : value,
      };
    });

    if (name === "category") {
      let temp = [...error];
      let index = temp.indexOf(name);
      if (newVal) {
        if (index > -1) {
          temp.splice(index, 1);
        }
      } else {
        if (index <= -1) {
          temp.push(name);
        }
      }
      setError(temp);
    }
  };

  const handleBlur = (evt, newVal) => {
    const { name, value } = evt.target;
    let temp = [...error];
    let index = temp.indexOf(name);
    if (value.trim() === "") {
      if (index <= -1) {
        temp.push(name);
      }
    } else {
      if (index > -1) {
        temp.splice(index, 1);
      }
    }
    setError(temp);
  };

  const handleSubmit = () => {
    let flag = true;
    let temp = [...error];
    if (formFields.title.trim() === "") {
      let index = temp.indexOf("title");
      if (index <= -1) {
        temp.push("title");
      }
      flag = false;
    }
    if (!formFields.category?.value) {
      let index = temp.indexOf("category");
      if (index <= -1) {
        temp.push("category");
      }
      flag = false;
    }

    if (formFields.price.trim() === "") {
      let index = temp.indexOf("price");
      if (index <= -1) {
        temp.push("price");
      }
      flag = false;
    }
    if (formFields.productID.trim() === "") {
      let index = temp.indexOf("productID");
      if (index <= -1) {
        temp.push("productID");
      }
      flag = false;
    }
    if (formFields.unit.trim() === "") {
      let index = temp.indexOf("unit");
      if (index <= -1) {
        temp.push("unit");
      }
      flag = false;
    }
    if (formFields.qty.trim() === "") {
      let index = temp.indexOf("qty");
      if (index <= -1) {
        temp.push("qty");
      }
      flag = false;
    }
    setError(temp);
    if (flag) {
      setSnackbarmsg("Product Successfully Added!");
      setSnackbarOpen(true);
      if (id) {
        navigate("/product-details/ec28fb41-6c91-46b7-9d94-43abe7a109cc");
      } else {
        navigate("/products");
      }
    } else {
      setSnackbarmsg("Please fill correct details!");
      setSnackbarOpen(true);
    }
  };

  const options = [
    { label: "Tiles", value: "Tiles" },
    { label: "Aggregate", value: "Aggregate" },
    { label: "cement", value: "cement" },
  ];
  return (
    <>
      <SnackbarAlert
        open={snackbarOpen}
        msg={snackbarmsg}
        handleClose={() => setSnackbarOpen(false)}
      />
      <Container maxWidth={false}>
        <Typography sx={{ m: 1 }} variant="h4">
          {!id ? "Add New Product" : "Edit"}
        </Typography>
        <Card>
          <CardContent>
            <Grid container spacing={3}>
              <Grid item xl={3} sm={6} xs={12}>
                <TextField
                  fullWidth
                  label="Title"
                  required
                  name="title"
                  value={formFields.title}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={error.includes("title")}
                />
              </Grid>
              <Grid item xl={3} sm={6} xs={12}>
                <Autocomplete
                  disablePortal
                  fullWidth
                  options={options}
                  name="category"
                  value={formFields.category}
                  isOptionEqualToValue={(option, value) => {
                    return option.value === value.value;
                  }}
                  onChange={(evt, newVal) =>
                    handleChange(
                      { target: { name: "category", value: null } },
                      newVal
                    )
                  }
                  // onBlur={(evt, newVal) =>
                  //   handleBlur(
                  //     { target: { name: "category", value: null } },
                  //     newVal
                  //   )
                  // }
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      error={error.includes("category")}
                      label="Category"
                      required
                    />
                  )}
                />
                {/* <TextField
                  fullWidth
                  label="Category"
                  required
                  value={formFields.category}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={error.includes("category")}
                  name="category"
                /> */}
              </Grid>
              <Grid item xl={3} sm={6} xs={12}>
                <TextField
                  fullWidth
                  label="Brand"
                  value={formFields.brand}
                  onChange={handleChange}
                  name="brand"
                />
              </Grid>
              <Grid item xl={3} sm={6} xs={12}>
                <TextField
                  fullWidth
                  label="Manufacture"
                  value={formFields.manufacturer}
                  onChange={handleChange}
                  name="manufacturer"
                />
              </Grid>
              <Grid item xl={3} sm={6} xs={12}>
                <TextField
                  fullWidth
                  label="Product ID"
                  required
                  value={formFields.productID}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={error.includes("productID")}
                  name="productID"
                />
              </Grid>
              <Grid item xl={3} sm={6} xs={12}>
                <TextField
                  fullWidth
                  label="Quantity"
                  required
                  value={formFields.qty}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={error.includes("qty")}
                  name="qty"
                />
              </Grid>
              <Grid item xl={3} sm={6} xs={12}>
                <TextField
                  fullWidth
                  label="Price"
                  required
                  value={formFields.price}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={error.includes("price")}
                  name="price"
                />
              </Grid>
              <Grid item xl={3} sm={6} xs={12}>
                <TextField
                  fullWidth
                  label="Unit"
                  required
                  value={formFields.unit}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={error.includes("unit")}
                  name="unit"
                />
              </Grid>
              <Grid item xl={12} sm={12} xs={12}>
                <TextField
                  fullWidth
                  label="Description"
                  multiline
                  maxRows="3"
                  minRows="3"
                />
              </Grid>
              <Grid item xl={3} sm={6} xs={12}>
                <label htmlFor="contained-button-file">
                  <Input
                    accept="image/*"
                    id="contained-button-file"
                    multiple
                    type="file"
                    value={formFields.images}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name="images"
                  />
                  <Button
                    variant="outlined"
                    component="span"
                    endIcon={<PhotoCamera />}
                    size="small"
                  >
                    Upload
                  </Button>
                </label>
              </Grid>
            </Grid>
          </CardContent>
        </Card>

        <Grid container spacing={3} justifyContent="flex-end">
          <Grid item xl={3} sm={3} xs={12}>
            <CardActions>
              <Button
                size="large"
                variant="outlined"
                fullWidth
                onClick={() => {
                  if (id) {
                    navigate(
                      "/product-details/ec28fb41-6c91-46b7-9d94-43abe7a109cc"
                    );
                  } else {
                    navigate("/products");
                  }
                }}
              >
                Cancel
              </Button>
              <Button
                size="large"
                variant="contained"
                fullWidth
                endIcon={<AddBoxIcon />}
                onClick={handleSubmit}
              >
                Submit
              </Button>
            </CardActions>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default AddProduct;
