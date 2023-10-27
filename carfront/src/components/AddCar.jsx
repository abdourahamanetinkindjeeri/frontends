import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import React, { useState } from "react";

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
    handleClose();
  };
  return (
    <div>
      <button onClick={handleOpen}>Nouvelle Voiture</button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle> Nouvelle Voiture </DialogTitle>
        <DialogContent>
          <input
            placeholder="Brand"
            name="brand"
            value={car.brand}
            onChange={handleChange}
          />{" "}
          <br />
          <input
            placeholder="Modele"
            name="model"
            value={car.model}
            onChange={handleChange}
          />{" "}
          <br />
          <input
            placeholder="Couleur"
            name="color"
            value={car.color}
            onChange={handleChange}
          />{" "}
          <br />
          <input
            placeholder="Annee"
            name="year"
            value={car.year}
            onChange={handleChange}
          />
          <br />
          <input
            placeholder="Prix"
            name="price"
            value={car.price}
            onChange={handleChange}
          />
        </DialogContent>
        <DialogActions>
          <button onClick={handleClose}>Cancel</button>
          <button onClick={handleSave}>Save</button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
