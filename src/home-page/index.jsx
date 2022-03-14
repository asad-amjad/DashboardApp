import React from "react";
import { Grid, Typography } from "@mui/material";
import TabsSection from "./TabsSection";

function Home() {
  return (
    <Grid
      container
      spacing={1}
      pl={15}
      pr={15}
      pt={15}
      style={{ display: "table" }}
    >
      <Grid item md={12} xs={12}>
        <Typography variant="h5">
          <strong>Profile</strong>
        </Typography>
      </Grid>
      <Grid item md={12} xs={12} sm={12}>
        <TabsSection />
      </Grid>
    </Grid>
  );
}
export default Home;
