import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import React, { useState } from "react";

export default function EditCar(props) {
  const [open, setOpen] = useState(false);
  const [car, setCar] = useState({
    brand: "",
    model: "",
    color: "",
    year: "",
    fuel: "",
    price: "",
  });

  const handleChange = (event) => {
    setCar({ ...car, [event.target.name]: event.target.value });
  };
  const handleClickOpen = () => {
    setCar({
      brand: props.data.row.brand,
      model: props.data.row.model,
      color: props.data.row.color,
      year: props.data.row.year,
      fuel: props.data.row.fuel,
      price: props.data.row.price,
    });
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleSave = () => {
    props.updateCar(car, props.data.id);
    handleClose();
  };
  return (
    <div>
      <button onClick={handleClickOpen}>Modifier</button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Modifier Voiture</DialogTitle>
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
