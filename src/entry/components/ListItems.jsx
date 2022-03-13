import React, { useState } from "react";
import {
  List,
  ListItem,
  Collapse,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { hasChildren } from "../../utilities";

const SingleLevel = ({ item }) => {
  return (
    <>
      <ListItem button>
        <ListItemIcon style={{ color: "#ffffffcc" }}>{item.icon}</ListItemIcon>
        <ListItemText style={{ color: "#ffffffcc" }} primary={item.title} />
      </ListItem>
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
        <ListItemIcon style={{ color: "#ffffffcc" }}>{item.icon}</ListItemIcon>
        <ListItemText style={{ color: "#ffffffcc" }} primary={item.title} />
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

const MenuItem = ({ item }) => {
  const Component = hasChildren(item) ? MultiLevel : SingleLevel;
  return <Component item={item} />;
};
export default MenuItem;
