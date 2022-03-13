import React from "react";
import {
  Grid,
  Drawer,
  Button,
  Divider,
  Toolbar,
  Typography,
} from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TelegramIcon from "@material-ui/icons/Telegram";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import { menu } from "./components/Routes";
import MenuItem from "./components/ListItems";

const socialIconStyle = { display: "flex", justifyContent: "center" };
function SidebarItems() {
  return (
    <>
      <Toolbar />
      <Grid item p={4} pt={0} md={12} xs={12} sm={12}>
        <AccountCircleIcon
          style={{ color: "rgb(50 132 213 / 79%)", fontSize: 60 }}
        />
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
              <Divider style={{ background: "rgb(168 168 168 / 74%)" }} variant="middle" />
            )}
          </div>
        );
      })}
      <Grid p={3} pt={1} container>
        <Grid item p={1} md={4} style={socialIconStyle}>
          <FacebookOutlinedIcon style={{ color: "rgb(48 147 121)" }} />
        </Grid>
        <Grid item p={1} md={4} style={socialIconStyle}>
          <TelegramIcon style={{ color: "rgb(48 147 121)" }} />
        </Grid>
        <Grid item p={1} md={4} style={socialIconStyle}>
          <YouTubeIcon style={{ color: "rgb(48 147 121)" }} />
        </Grid>
        <Grid
          item
          p={1}
          md={12}
          xs={12}
          sm={12}
          style={{ textAlignLast: "center" }}
        >
          <Button
            variant="contained"
            style={{ background: "rgb(48 147 121)" }}
            endIcon={<LogoutIcon />}
          >
            Log out
          </Button>
        </Grid>
      </Grid>
    </>
  );
}

function Sidebar({ container, mobileOpen, handleDrawerToggle, drawerWidth }) {
  return (
    <>
      <Drawer
        container={container}
        variant="temporary"
        open={mobileOpen}
        onClose={() => handleDrawerToggle()}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          "& .MuiDrawer-paper": {
            overflow: "hidden",
            background: "#555555",
            color: "#ffffffcc",
          },
        }}
      >
        <SidebarItems />
      </Drawer>

      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", sm: "block" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
            overflow: "hidden",
            background: "#555555",
            color: "white",
          },
        }}
        open
      >
        <SidebarItems />
      </Drawer>
    </>
  );
}
export default Sidebar;
