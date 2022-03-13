import React from "react";
import { Grid, Typography } from "@mui/material";
import TabsSection from "./TabsSection";

function Home() {
  return (
    <Grid container pl={15} pr={15} pt={15}>
      <Grid item md={12} xs={12}>
        <Typography variant="h5">
          <strong>Profile</strong>
        </Typography>
      </Grid>
      <Grid item>
        <TabsSection />
      </Grid>
    </Grid>
  );
}
export default Home;
