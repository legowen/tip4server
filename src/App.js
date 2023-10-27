import React, { useState } from "react";
import { CssBaseline, AppBar, Toolbar, Typography } from "@mui/material";
import Total from './components/Total';
import Kitchen from "./components/Kitchen";
import Hall from "./components/Hall.js";

function App() {
  const [topTotal, setTopTotal] = useState(0);

  return (
    <div>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Tip Calculator App</Typography>
        </Toolbar>
      </AppBar>
      <Total onTotalUpdate={setTopTotal} />
      <Kitchen topTotal={topTotal} />
      <Hall topTotal={topTotal} />
    </div>
  );
}

export default App;
