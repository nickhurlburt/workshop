import React from 'react';
import './App.css';
import { InputLabel, MenuItem, Select } from '@material-ui/core';

function App() {
  return (
    <div className="App">
      <form>
        <label for="selections">Selections</label>
        <select id="selections">
          <option name="Aardvark">Aardvarka</option>
          <option name="Alphabet">Alphabeta</option>
          <option name="Balthazar">Balthazara</option>
          <option name="Bathsheba">Bathshebaa</option>
        </select>
      </form>
      <form>
        <InputLabel id="demo-simple-select-label">Gender</InputLabel>
          <Select
            native
            labelId="demo-simple-select-label"
            id="demo-simple-select"
          >
            <MenuItem value="male">Male</MenuItem>
            <MenuItem value="female">Female</MenuItem>
            <MenuItem value="unknown">Unknown</MenuItem>
          </Select>
      </form>
    </div>
  );
}

export default App;
