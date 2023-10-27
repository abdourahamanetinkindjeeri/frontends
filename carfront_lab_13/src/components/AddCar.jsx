import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import AddCircleOutlinedIcon from "@mui/icons-material/AddCircleOutlined";
import CancelSharpIcon from "@mui/icons-material/CancelSharp";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

export default function AddCar(props) {
  const [open, SetOpen] = useState(false);
  const [car, setCar] = useState({
    brand: "",
    model: "",
    color: "",
    year: "",
    fuel: "",
    price: "",
  });
  const handleOpen = () => {
    SetOpen(true);
  };
  const handleClose = () => {
    SetOpen(false);
  };
  const handleChange = (event) => {
    setCar({ ...car, [event.target.name]: event.target.value });
  };
  const handleSave = () => {
    props.addCar(car);
    setCar({
      ...car,
      brand: "",
      model: "",
      color: "",
      year: "",
      fuel: "",
      price: "",
    });
    handleClose();
  };
  return (
    <div>
      <Button variant="contained" onClick={handleOpen}>
        <AddCircleOutlinedIcon />
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle> Nouvelle Voiture </DialogTitle>
        <DialogContent>
          <Stack spacing={2} mt={1}>
            <TextField
              label="Brand"
              name="brand"
              value={car.brand}
              onChange={handleChange}
            />
            <br />
            <TextField
              label="Modele"
              name="model"
              value={car.model}
              onChange={handleChange}
            />
            <br />
            <TextField
              label="Couleur"
              name="color"
              value={car.color}
              onChange={handleChange}
            />
            <br />
            <TextField
              label="Annee"
              name="year"
              value={car.year}
              onChange={handleChange}
            />
            <br />
            <TextField
              label="Prix"
              name="price"
              value={car.price}
              onChange={handleChange}
            />
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>
            {" "}
            <CancelSharpIcon color="error" />{" "}
          </Button>
          <Button onClick={handleSave}>
            <CheckCircleOutlineIcon color="success" />
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
