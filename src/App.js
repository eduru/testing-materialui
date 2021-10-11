import logo from "./logo.svg";
import "./App.css";
import * as React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import Slider from "@mui/material/Slider";
import VolumeDown from "@mui/icons-material/VolumeDown";
import VolumeUp from "@mui/icons-material/VolumeUp";
function App() {
  const [value, setValue] = React.useState(30);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Stack direction="row" spacing={2}>
          <Avatar
            alt="Remy Sharp"
            src="https://duckduckgo.com/i/733b586c.png"
          />
          <Avatar
            alt="Travis Howard"
            src="https://duckduckgo.com/i/733b586c.png"
          />
          <Avatar
            alt="Cindy Baker"
            src="https://duckduckgo.com/i/733b586c.png"
          />
        </Stack>
        <br />
        <Stack spacing={2} direction="row">
          <Button variant="text">Text</Button>
          <Button variant="contained">Contained</Button>
          <Button variant="outlined">Outlined</Button>
        </Stack>
        <Box sx={{ width: 200 }}>
          <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
            <VolumeDown />
            <Slider aria-label="Volume" value={value} onChange={handleChange} />
            <VolumeUp />
          </Stack>
          <Slider disabled defaultValue={30} aria-label="Disabled slider" />
        </Box>
      </header>
    </div>
  );
}

export default App;
