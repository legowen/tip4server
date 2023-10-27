import React, { useState } from "react";
import { Container, Paper, TextField, Typography, List, ListItem, ListItemText } from "@mui/material";

function Hall({ topTotal }) {
  const hallTotal = topTotal * 0.55;
  const [people, setPeople] = useState([]);
  const defaultTip = hallTotal / 2; // Default daily tip per person

  const handleAddPerson = () => {
    if (people.length < 2) {
      const newPerson = {
        name: `Person ${people.length + 1}`,
        dailyTip: defaultTip,
      };
      setPeople([...people, newPerson]);
    }
  };

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} style={{ padding: "20px" }}>
        <Typography variant="h4" gutterBottom>
          Hall
        </Typography>
        <Typography variant="h6">Total Tip for Hall: ${hallTotal.toFixed(2)}</Typography>
        <button onClick={handleAddPerson}>Add Person</button>
        <Typography variant="h6">Daily Tips:</Typography>
        <List>
          {people.map((person, index) => (
            <ListItem key={index}>
              <ListItemText
                primary={`${person.name} - Daily Tip: $${person.dailyTip.toFixed(2)}`}
              />
            </ListItem>
          ))}
        </List>
      </Paper>
    </Container>
  );
}

export default Hall;
