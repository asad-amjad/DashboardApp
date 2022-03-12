import React from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";

const TextWithLabel = ({ label, value, handleChange }) => {
  return (
    <Grid container style={{ display: "flex", alignItems: "center" }}>
      <Grid item md={9}>
        <TextField
          sx={{ m: 1, width: "55ch" }}
          size="small"
          id="outlined-name"
          label={label}
          value={value}
          onChange={handleChange}
        />
      </Grid>
      <Grid item md={2}>
        Edit
      </Grid>
    </Grid>
  );
};

export default TextWithLabel;
