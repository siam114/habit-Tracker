import { Box, TextField } from "@mui/material";
import React, { useState } from "react";

const AddHabitForm: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [frequescy, setFrequency] = useState<"Daily" | "Weekly">("Daily");
  return (
    <form>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <TextField
          label="Habit Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter Habit Name"
          fullWidth
        />
      </Box>
    </form>
  );
};

export default AddHabitForm;
