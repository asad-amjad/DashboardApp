import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TabsSection from "./TabsSection";

function Home() {
  return (
    <Grid container p={6}>
      <Grid item md={12} sm={12}>
        <Typography variant="h5">
          <b>Profile</b>
        </Typography>
      </Grid>
      <Grid item>
        <TabsSection />
      </Grid>
    </Grid>
  );
}
export default Home;
