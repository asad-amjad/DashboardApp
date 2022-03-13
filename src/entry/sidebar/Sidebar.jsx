import React from "react";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import LogoutIcon from "@mui/icons-material/Logout";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TelegramIcon from "@material-ui/icons/Telegram";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import { menu } from "./Routes";
import MenuItem from "./components/ListItems";

function Sidebar() {
  return (
    <>
      <Toolbar />
      <Grid item p={4} pt={0} md={12} xs={12} sm={12}>
        <AccountCircleIcon style={{ color: "#1976d2", fontSize: 40 }} />
        <Typography mt={2} variant="h5" style={{ color: "#ffffffcc" }}>
          Admin One
        </Typography>
        <Typography variant="p" style={{ color: "#ffffffcc" }}>
          Centralin User
        </Typography>
      </Grid>
      {menu.map((item, i) => {
        return (
          <div key={i}>
            <MenuItem item={item} />
            {item.border && (
              <Divider style={{ background: "#dddddd" }} variant="middle" />
            )}
          </div>
        );
      })}
      <Grid p={3} pt={1} container>
        <Grid
          item
          p={1}
          md={4}
          style={{ display: "flex", justifyContent: "center" }}
        >
          <FacebookOutlinedIcon />
        </Grid>
        <Grid
          item
          p={1}
          md={4}
          style={{ display: "flex", justifyContent: "center" }}
        >
          <TelegramIcon />
        </Grid>
        <Grid
          item
          p={1}
          md={4}
          style={{ display: "flex", justifyContent: "center" }}
        >
          <YouTubeIcon />
        </Grid>
        <Grid
          item
          p={1}
          md={12}
          xs={12}
          sm={12}
          style={{ textAlignLast: "center" }}
        >
          <Button variant="contained" color="success" endIcon={<LogoutIcon />}>
            Log out
          </Button>
        </Grid>
      </Grid>
    </>
  );
}
export default Sidebar;
