import React, { useState } from "react";
import { SERVER_URL } from "./constants";
import { Button, Stack, TextField } from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import Carlist from "./Carlist";
import Snackbar from "@mui/material/Snackbar";

function Login() {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const [open, setOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const handleChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const login = () => {
    fetch(SERVER_URL + "login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    })
      .then((res) => {
        const jwtToken = res.headers.get("Authorization");

        if (jwtToken != null) {
          sessionStorage.setItem("jwt", jwtToken);
          setIsAuthenticated(true);
        } else {
          setOpen(true);
        }
      })
      .catch((erreur) => console.error(erreur));
  };

  const logout = () => {
    sessionStorage.removeItem("jwt");
    setIsAuthenticated(false);
  };

  if (isAuthenticated) {
    return (
      <div>
        <Carlist />
        <Button variant="outlined" color="primary" onClick={logout}>
          <LogoutIcon />
        </Button>
      </div>
    );
  } else {
    return (
      <div>
        <Stack spacing={2} alignItems="center" mt={2}>
          <TextField
            name="username"
            label="Nom d'tilisateur"
            onChange={handleChange}
          />
          <TextField
            type="password"
            name="password"
            label="Mot de pass"
            onChange={handleChange}
          />
        </Stack>
        <Button variant="outlined" color="primary" onClick={login}>
          <LoginIcon />
        </Button>
        <Snackbar
          open={open}
          autoHideDuration={3000}
          onClose={() => setOpen(false)}
          message="Login failled : Check your username and password"
        />
      </div>
    );
  }
}

export default Login;
