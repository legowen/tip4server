import React, { useState } from "react";
import { Container, Paper, TextField, Typography, List, ListItem, ListItemText } from "@mui/material";

function Kitchen({ topTotal }) {
  const kitchenTotal = topTotal * 0.45;
  const [people, setPeople] = useState([]);
  const [name, setName] = useState("");
  const [workHours, setWorkHours] = useState(0.5); // Default to 0.5

  const handleAddPerson = () => {
    if (name && workHours) {
      const dailyTip = (kitchenTotal / people.length) * workHours;
      const newPerson = {
        name,
        workHours,
        dailyTip,
      };
      setPeople([...people, newPerson]);
      setName("");
      setWorkHours(0.5);
    }
  };

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} style={{ padding: "20px" }}>
        <Typography variant="h4" gutterBottom>
          Kitchen
        </Typography>
        <Typography variant="h6">Total Tip for Kitchen: ${kitchenTotal.toFixed(2)}</Typography>
        <TextField label="Name" fullWidth value={name} onChange={(e) => setName(e.target.value)} />
        <TextField
          label="Work Hours"
          type="number"
          step="0.5"
          fullWidth
          value={workHours}
          onChange={(e) => setWorkHours(parseFloat(e.target.value))}
        />
        <button onClick={handleAddPerson}>Add Person</button>
        <Typography variant="h6">Daily Tips:</Typography>
        <List>
          {people.map((person, index) => (
            <ListItem key={index}>
              <ListItemText
                primary={`${person.name} - Work Hours: ${person.workHours}, Daily Tip: $${person.dailyTip.toFixed(2)}`}
              />
            </ListItem>
          ))}
        </List>
      </Paper>
    </Container>
  );
}

export default Kitchen;
