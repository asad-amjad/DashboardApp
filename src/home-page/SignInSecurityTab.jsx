import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import TextWithLabel from "../shared/TextWithLabel";
import AccountActivityTable from "./AccountActivityTable";

function SignInSecurityTab() {
  const [name, setName] = React.useState("");
  const handleChange = (event) => {
    setName(event.target.value);
  };

  return (
    <>
      <Grid container p={5} pb={1}>
        <Grid item md={4}>
          <Typography variant="h6">Sing in</Typography>
        </Grid>
        <Grid item md={8}>
          <Box
            sx={{
              "& > :not(style)": { m: 1, width: "70ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              size="small"
              id="outlined-name"
              label="Name"
              value={name}
              onChange={handleChange}
            />
            <TextField
              size="small"
              id="outlined-name"
              label="Name"
              value={name}
              onChange={handleChange}
            />
          </Box>
        </Grid>
      </Grid>

      <Divider
        style={{ background: "rgba(0, 0, 0, 0.12)", width: "100%" }}
        variant="middle"
      />
      <Grid container p={5}>
        <Grid item md={4}>
          <Typography variant="h6">Security Information</Typography>
        </Grid>
        <Grid item md={8}>
          <TextWithLabel
            value={name}
            label="Name"
            handleChange={handleChange}
          />
          <TextWithLabel
            value={name}
            label="Name"
            handleChange={handleChange}
          />
          <TextWithLabel
            value={name}
            label="Name"
            handleChange={handleChange}
          />
        </Grid>
      </Grid>

      <Grid container p={5}>
        <Grid item md={12}>
          <Typography variant="h6">Account Activity</Typography>
        </Grid>
        <Grid item md={11}>
          <AccountActivityTable />
        </Grid>
      </Grid>
    </>
  );
}
export default SignInSecurityTab;
