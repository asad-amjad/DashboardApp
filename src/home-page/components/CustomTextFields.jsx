import React from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";

export const TextFieldCustom = ({ label, value, handleChange }) => {
  return (
    <>
      <TextField
        style={{ width: "100%", marginBottom: 18 }}
        id={`outlined${label}`}
        label={label}
        value={value}
        onChange={handleChange}
        InputLabelProps={{
          style: {
            margin: "-3px",
          },
        }}
        inputProps={{
          style: {
            height: "15px",
            color: "cornflowerblue",
          },
        }}
      />
    </>
  );
};

export const TextFieldWithLabel = ({ label, value, type }) => {
  return (
    <>
      <Grid container style={{ display: "flex" }}>
        <Grid item md={10}>
          <TextField
            style={{ width: "100%", marginBottom: 18 }}
            id={`outlined${label}`}
            label={label}
            value={value}
            type={type}
            InputLabelProps={{
              style: {
                margin: "-3px",
              },
            }}
            inputProps={{
              style: {
                height: "15px",
              },
            }}
          />
        </Grid>
        <Grid
          item
          md={2}
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "12px",
            color: "blue",
          }}
        >
          Edit
        </Grid>
      </Grid>
    </>
  );
};
