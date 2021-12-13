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
import React, { useEffect, useState } from "react";
import AddBoxIcon from "@mui/icons-material/AddBox";
import { useNavigate, useParams } from "react-router-dom";
const Input = styled("input")({
  display: "none",
});

const AddService = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formFields, setFormFields] = useState({
    title: "",
    category: null,
    price: "",
    duration: "",
    desc: "",
    images: "",
  });
  const [error, setError] = useState([]);

  useEffect(() => {
    if (id) {
      setFormFields({
        title: "Masons and contractors",
        category: { label: "Tiles", value: "Tiles" },
        duration: "05",
        price: "1345",
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
    console.log(name, value);
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
    if (formFields.duration.trim() === "") {
      let index = temp.indexOf("duration");
      if (index <= -1) {
        temp.push("duration");
      }
      flag = false;
    }
    setError(temp);
    if (flag) {
      if (id) {
        navigate(`/service-details/${id}`);
      } else {
        navigate("/services");
      }
    }
  };

  const options = [
    { label: "Tiles", value: "Tiles" },
    { label: "Aggregate", value: "Aggregate" },
    { label: "cement", value: "cement" },
  ];
  return (
    <>
      <Container maxWidth={false}>
        <Typography sx={{ m: 1 }} variant="h4">
          {!id ? "Add New Service" : "Edit"}
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
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      error={error.includes("category")}
                      label="Category"
                      required
                    />
                  )}
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
                  label="Duration"
                  required
                  value={formFields.duration}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={error.includes("duration")}
                  name="duration"
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
          <Grid item xl={3} sm={2} xs={12}>
            <CardActions>
              <Button
                size="large"
                variant="outlined"
                fullWidth
                onClick={() => {
                  if (id) {
                    navigate(`/service-details/${id}"`);
                  } else {
                    navigate("/services");
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

export default AddService;
