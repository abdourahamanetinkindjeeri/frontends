import React, { useEffect, useState } from "react";
import { SERVER_URL } from "./constants";
import { DataGrid } from "@mui/x-data-grid";
import Snackbar from "@mui/material/Snackbar";
import { Fragment } from "react";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import AddOwner from "./AddOwner";
import EditOwner from "./EditOwner";

export default function OwnerList() {
  const [open, setOpen] = useState(false);
  const [owners, setOwners] = useState([]);
  const columns = [
    { field: "firstname", headerName: "Prénom", width: 200 },
    { field: "lastname", headerName: "Nom", width: 200 },

    {
      field: "links.owner.href",
      headerName: "",
      sortable: false,
      filterable: false,

      renderCell: (row) => <EditOwner data={row} updateOwner={updateOwner} />,
    },
    {
      field: "links.self.href",
      headerName: "",
      sortable: false,
      filterable: false,

      renderCell: (row) => (
        <IconButton onClick={() => oneDelClick(row.id)}>
          <DeleteIcon color="error" />
        </IconButton>
      ),
    },
  ];
  useEffect(() => {
    fetchOwners();
  }, []);

  const fetchOwners = () => {
    fetch(SERVER_URL + "api/owners")
      .then((reponse) => reponse.json())
      .then((data) => setOwners(data._embedded.owners))
      .catch((err) => console.error(err));
  };
  const addOwner = (owner) => {
    fetch(SERVER_URL + "api/owners", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(owner),
    })
      .then((reponse) => {
        if (reponse.ok) {
          fetchOwners();
        } else alert("Something went wrong !");
      })
      .catch((err) => console.error(err));
  };
  const updateOwner = (owner, link) => {
    fetch(link, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(owner),
    })
      .then((reponse) => {
        if (reponse.ok) fetchOwners();
        else alert("Something went wrong !");
      })
      .catch((err) => console.error(err));
  };
  const oneDelClick = (url) => {
    if (window.confirm("Souhaitez vous le supprimer ?"))
      fetch(url, { method: "DELETE" })
        .then((reponse) => {
          if (reponse.ok) {
            fetchOwners();
            setOpen(true);
          } else alert("Quelque chose s'est mal passe !");
        })

        .catch((err) => console.error(err));
  };
  return (
    <Fragment>
      <Stack mt={2} mb={2}>
        <AddOwner addOwner={addOwner} />
      </Stack>
      <div style={{ height: 500, width: "100%" }}>
        <DataGrid
          rows={owners}
          columns={columns}
          disableRowSelectionOnClick={true}
          getRowId={(row) => row._links.self.href}
        />
        <Snackbar
          open={open}
          autoHideDuration={2000}
          onClose={() => setOpen(false)}
          message="Voiture supprimee"
        />
      </div>
    </Fragment>
  );
}
