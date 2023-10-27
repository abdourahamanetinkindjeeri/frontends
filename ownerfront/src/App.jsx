import { AppBar, Toolbar, Typography } from "@mui/material";
import "./App.css";
import OwnerList from "./components/OwnerList";

function App() {
  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Ownershop</Typography>
        </Toolbar>
      </AppBar>
      <OwnerList />
    </div>
  );
}

export default App;
