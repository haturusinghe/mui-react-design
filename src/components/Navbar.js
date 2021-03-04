import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";

import {
  AppBar,
  Toolbar,
  Grid,
  InputBase,
  IconButton,
  Badge,
  Typography,
} from "@material-ui/core";
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew";
import NotificationsOutlinedIcon from "@material-ui/icons/NotificationsOutlined";
import ChatOutlinedIcon from "@material-ui/icons/ChatOutlined";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import MenuIcon from "@material-ui/icons/Menu";
import AccordianList from "./AccordianList";
import HMenu from "./controls/HMenu";

const useStyles = makeStyles({
  root: {},
  rooty: { backgroundColor: "#1A1A1A", color: "#fff" },
  icons: { color: "#fff", "&:hover": { color: "#F50057" } },
  searchInput: {
    opacity: "0.6",
    padding: "5px 8px",
    fontSize: "0.8rem",
    color: "#fff",
    borderRadius: "10px",
    "&:hover": { border: "1px solid white" },
    "& .MuiSvgIcon-root": { marginRight: "5px" },
  },
});

export default function Navbar(props) {
  const classes = useStyles();
  const [state, setState] = React.useState({
    right: false,
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const anchor = "right";
  return (
    <>
      <AppBar position="static" className={classes.rooty}>
        <Toolbar>
          <Grid container alignItems="center">
            <Grid item>
              <Typography variant="h6">THE BORING COMPANY</Typography>
            </Grid>
            <Grid xs item></Grid>
            <Grid item>
              <HMenu />
            </Grid>
            <Grid xs={1} item></Grid>
            <Grid item>
              <InputBase
                placeholder={"Hello"}
                className={classes.searchInput}
                startAdornment={<SearchOutlinedIcon fontSize="small" />}
              />
            </Grid>
            <Grid item>
              <IconButton>
                <Badge badgeContent={4} color="secondary">
                  <NotificationsOutlinedIcon
                    fontSize="small"
                    className={classes.icons}
                  />
                </Badge>
              </IconButton>
              <IconButton color="#fff">
                <Badge badgeContent={4} color="secondary">
                  <ChatOutlinedIcon
                    fontSize="small"
                    className={classes.icons}
                  />
                </Badge>
              </IconButton>
              <IconButton color="#fff">
                <MenuIcon
                  fontSize="small"
                  className={classes.icons}
                  onClick={toggleDrawer(anchor, true)}
                />
              </IconButton>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <React.Fragment key={anchor}>
        <Drawer
          anchor={anchor}
          open={state[anchor]}
          onClose={toggleDrawer(anchor, false)}
        >
          <AccordianList />
        </Drawer>
      </React.Fragment>
    </>
  );
}
