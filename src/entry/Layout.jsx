import Grid from "@mui/material/Grid";
import Header from "./header/Header";
import Home from "../home-page/Home";
import Sidebar from "./sidebar/Sidebar";

function Root() {
  return (
    <Grid container>
      <Grid item md={2} xs={2} sm={2}>
        <Sidebar />
      </Grid>
      <Grid item md={10} xs={10} sm={10}>
        <Header />
        <Home />
      </Grid>
    </Grid>
  );
}
export default Root;
