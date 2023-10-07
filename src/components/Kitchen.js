import React, { useState } from "react";
import {
  Container,
  Grid,
  Paper,
  TextField,
  Typography,
  Button,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";

function Kitchen() {
  const [people, setPeople] = useState([]);
  const [name, setName] = useState("");
  const [workHours, setWorkHours] = useState("");
  const tipPercentage = 0.45; // Assuming the tip percentage is constant

  const handleAddPerson = () => {
    if (name && workHours) {
      const newPerson = {
        name: name,
        workHours: parseFloat(workHours),
      };
      setPeople([...people, newPerson]);
      setName("");
      setWorkHours("");
    }
  };

  const totalTip = people.reduce((acc, person) => acc + person.workHours, 0) * tipPercentage;

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} style={{ padding: "20px" }}>
        <Typography variant="h4" gutterBottom>
          Kitchen
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h6">People who worked:</Typography>
            <List>
              {people.map((person, index) => (
                <ListItem key={index}>
                  <ListItemText
                    primary={`${person.name} - ${person.workHours} hours`}
                  />
                </ListItem>
              ))}
            </List>
            <Typography variant="h6">Total Tip: ${totalTip.toFixed(2)}</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h6">Add a Person:</Typography>
            <TextField
              label="Name"
              fullWidth
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <TextField
              label="Work Hours"
              type="number"
              fullWidth
              value={workHours}
              onChange={(e) => setWorkHours(e.target.value)}
            />
            <Button
              variant="contained"
              color="primary"
              onClick={handleAddPerson}
            >
              Add Person
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
}

export default Kitchen;
