import React from "react";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import Select from "@mui/material/Select";
import Switch from "@mui/material/Switch";
import Divider from "@mui/material/Divider";
import MenuItem from "@mui/material/MenuItem";
import FormGroup from "@mui/material/FormGroup";
import InputLabel from "@mui/material/InputLabel";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import FormControl from "@mui/material/FormControl";
import SettingsIcon from "@mui/icons-material/Settings";
import FormControlLabel from "@mui/material/FormControlLabel";
import NotificationsIcon from "@material-ui/icons/Notifications";

const Header = () => {
  const [language, setLanguage] = React.useState("English");

  const handleChange = (event) => {
    setLanguage(event.target.value);
  };

  return (
    <>
      <Grid
        container
        style={{ display: "flex", justifyContent: "space-evenly" }}
      >
        <Grid item md={6} xs={12} style={{ alignSelf: "center" }}>
          <Typography variant="h5">Welcome to Centralin!</Typography>
        </Grid>

        <Grid item md={6}>
          <Grid container style={{ display: "flex", alignItems: "center" }}>
            <Grid
              item
              md={5}
              xs={5}
              style={{
                display: "flex",
                alignItems: "center",

                justifyContent: "space-evenly",
              }}
            >
              <FormGroup>
                <FormControlLabel
                  control={<Switch defaultChecked />}
                  labelPlacement="start"
                  label="Training Mode"
                />
              </FormGroup>
            </Grid>
            <Grid item md={4} xs={4}>
              <FormControl sx={{ m: 1, minWidth: 130 }} size="small">
                <InputLabel id="language">Language</InputLabel>
                <Select
                  labelId="language"
                  value={language}
                  label="language"
                  onChange={handleChange}
                >
                  <MenuItem value={"English"}>English</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item md={1} xs={1}>
              <IconButton>
                <NotificationsIcon />
              </IconButton>
            </Grid>
            <Grid item md={1} xs={1}>
              <IconButton>
                <SettingsIcon />
              </IconButton>
            </Grid>
            <Grid item md={1} xs={1}>
              <IconButton>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Divider style={{ background: "#dddddd" }} variant="middle" />
    </>
  );
};
export default Header;
