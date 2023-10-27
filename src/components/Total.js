import React, { useState } from "react";
import { Container, Paper, TextField, Typography } from "@mui/material";

function Total({ onTotalUpdate }) {
  const [cash, setCash] = useState(0);
  const [online, setOnline] = useState(0);
  const [card, setCard] = useState(0);

  const updateTotal = () => {
    const total = cash + online + card;
    onTotalUpdate(total);
  };

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} style={{ padding: "20px" }}>
        <Typography variant="h4" gutterBottom>
          Total Tip Calculator
        </Typography>
        <TextField
          label="Cash"
          type="number"
          fullWidth
          value={cash}
          onChange={(e) => {
            setCash(parseFloat(e.target.value));
            updateTotal();
          }}
        />
        <TextField
          label="Online"
          type="number"
          fullWidth
          value={online}
          onChange={(e) => {
            setOnline(parseFloat(e.target.value));
            updateTotal();
          }}
        />
        <TextField
          label="Card"
          type="number"
          fullWidth
          value={card}
          onChange={(e) => {
            setCard(parseFloat(e.target.value));
            updateTotal();
          }}
        />
      </Paper>
    </Container>
  );
}

export default Total;

