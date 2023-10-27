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

export default function AddOwner(props) {
  const [open, SetOpen] = useState(false);
  const [owner, setOwner] = useState({
    firstname: "",
    lastname: "",
  });
  const handleOpen = () => {
    SetOpen(true);
  };
  const handleClose = () => {
    SetOpen(false);
  };
  const handleChange = (event) => {
    setOwner({ ...owner, [event.target.name]: event.target.value });
  };
  const handleSave = () => {
    props.addOwner(owner);
    setOwner({
      ...owner,
      firstname: "",
      lastname: "",
      ownerid: "",
    });
    handleClose();
  };
  return (
    <div>
      <Button variant="contained" onClick={handleOpen}>
        +
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle> Nouveau Proprietaire </DialogTitle>
        <DialogContent>
          <Stack spacing={2} mt={1}>
            <TextField
              label="Prenom"
              name="firstname"
              value={owner.firstname}
              onChange={handleChange}
            />
            <br />
            <TextField
              label="Nom"
              name="lastname"
              value={owner.lastname}
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
