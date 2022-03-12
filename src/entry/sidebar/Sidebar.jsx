import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import Avatar from "@mui/material/Avatar";
import Divider from "@mui/material/Divider";
import Collapse from "@mui/material/Collapse";
import ListItem from "@mui/material/ListItem";
import Typography from "@mui/material/Typography";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { menu, bottomMenu } from "./Routes";
import { hasChildren } from "../../utilities";

export default function Sidebar() {
  return (
    <Grid container>
      <Grid item p={4}>
        <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
        <Typography mt={2} variant="h5">
          Admin One
        </Typography>
        <Typography variant="p">Centralin User</Typography>
      </Grid>
      <Grid item>
        {menu.map((item, key) => (
          <MenuItem key={key} item={item} />
        ))}
        {bottomMenu.map((item, key) => (
          <MenuItem key={key} item={item} />
        ))}
      </Grid>
    </Grid>
  );
}

const MenuItem = ({ item }) => {
  const Component = hasChildren(item) ? MultiLevel : SingleLevel;
  return <Component item={item} />;
};

const SingleLevel = ({ item }) => {
  return (
    <>
      <ListItem button>
        <ListItemIcon>{item.icon}</ListItemIcon>
        <ListItemText primary={item.title} />
      </ListItem>
      {/* {item.border && (
        <Divider style={{ background: "#dddddd" }} variant="middle" />
      )} */}
    </>
  );
};

const MultiLevel = ({ item }) => {
  const { items: children } = item;
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  return (
    <React.Fragment>
      <ListItem button onClick={handleClick}>
        <ListItemIcon>{item.icon}</ListItemIcon>
        <ListItemText primary={item.title} />
        {open ? <ExpandLessIcon /> : <ChevronRightIcon />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {children.map((child, key) => (
            <MenuItem key={key} item={child} />
          ))}
        </List>
      </Collapse>
    </React.Fragment>
  );
};
