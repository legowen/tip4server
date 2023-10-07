import React, { useState } from "react";
import { Container, Grid, Paper, TextField, Typography } from "@mui/material";

const Total = () => {
  const [cash, setCash] = useState(0);
  const [online, setOnline] = useState(0);
  const [card, setCard] = useState(0);

  const total = cash + online + card;

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} style={{ padding: "20px" }}>
        <Typography variant="h4" gutterBottom>
          Tip Calculator
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField
              label="Cash"
              type="number"
              fullWidth
              value={cash}
              onChange={(e) => setCash(parseFloat(e.target.value))}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Online"
              type="number"
              fullWidth
              value={online}
              onChange={(e) => setOnline(parseFloat(e.target.value))}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Card"
              type="number"
              fullWidth
              value={card}
              onChange={(e) => setCard(parseFloat(e.target.value))}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField label="Total" fullWidth value={total} disabled />
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
}

export default Total;
