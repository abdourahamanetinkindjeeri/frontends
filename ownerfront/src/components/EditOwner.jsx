import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";

export default function EditOwner(props) {
  const [open, setOpen] = useState(false);
  const [owner, setOwner] = useState({
    firstname: "",
    lastname: "",
    // ownerid: "", Pas possibilite de modifier l'ownerid car c'est la cle primaire (avec auto_increment)
  });

  const handleChange = (event) => {
    setOwner({ ...owner, [event.target.name]: event.target.value });
  };
  const handleClickOpen = () => {
    setOwner({
      firstname: props.data.row.firstname,
      lastname: props.data.row.lastname,
      ownerid: props.data.row.ownerid,
    });
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleSave = () => {
    props.updateOwner(owner, props.data.id);
    handleClose();
  };
  return (
    <div>
      <IconButton color="primary" onClick={handleClickOpen}>
        <EditIcon />
      </IconButton>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Modifier Proprietaire</DialogTitle>
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
            <br />
          </Stack>
        </DialogContent>
        <DialogActions>
          <button onClick={handleClose}>Cancel</button>
          <button onClick={handleSave}>Save</button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
