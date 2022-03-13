import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TabsSection from "./TabsSection";

function Home() {
  return (
    <Grid container pl={20} pr={20} pt={10}>
      <Grid item md={12} sm={12}>
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
