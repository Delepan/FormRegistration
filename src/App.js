import "./App.css";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

function App() {
  return (
    <Container fixed className="App">
      <Box component="form" sx={{ bgcolor: "#cfe8fc", height: "100vh" }}>
        <div>
          <TextField required id="outlined-required" label="Name" />
          <TextField
            required
            id="outlined-required"
            label="Password"
            type="password"
          />
        </div>
      </Box>
    </Container>
  );
}

export default App;
