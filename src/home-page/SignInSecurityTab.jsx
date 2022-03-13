import React, { useState } from "react";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import AccountActivityTable from "./AccountActivityTable";
import {
  TextFieldCustom,
  TextFieldWithLabel,
} from "./components/CustomTextFields";

function SignInSecurityTab() {
  const [email, setEmail] = useState("dummy@gmail.com");
  const handleChange = (event) => {
    setEmail(event.target.value);
  };

  return (
    <>
      <Grid container pt={1}>
        <Card style={{ padding: "15px", width: "100%" }}>
          <Grid container pt={1} style={{ display: "flex" }}>
            <Grid item md={5}>
              <Typography variant="h6">Sing in</Typography>
            </Grid>
            <Grid item md={7}>
              <TextFieldCustom
                handleChange={handleChange}
                value={email}
                label="Email Address"
              />
              <TextFieldCustom
                handleChange={handleChange}
                value={email}
                label="Confirm New Email"
              />
            </Grid>
          </Grid>
        </Card>
      </Grid>

      <Grid container pl={1} pr={1} pt={5} style={{ display: "flex" }}>
        <Grid item md={5}>
          <Typography variant="h6">Security Information</Typography>
        </Grid>
        <Grid item md={7}>
          <TextFieldWithLabel
            value="password"
            type="password"
            label="Old Password"
          />
          <TextFieldWithLabel
            type="password"
            value="password123"
            label="New Password"
          />
          <TextFieldWithLabel
            value="password123"
            type="password"
            label="Confirm New Password"
          />
        </Grid>
      </Grid>

      <Grid container pt={5}>
        <Grid item md={12}>
          <Typography variant="h6">Account Activity</Typography>
        </Grid>
        <Grid item md={12}>
          <AccountActivityTable />
        </Grid>
      </Grid>
    </>
  );
}
export default SignInSecurityTab;
