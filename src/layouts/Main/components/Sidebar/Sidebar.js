import React from "react";
import clsx from "clsx";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/styles";
import { Divider, Drawer } from "@material-ui/core";
import DashboardIcon from "@material-ui/icons/Dashboard";
import PeopleIcon from "@material-ui/icons/Person";
import GroupIcon from "@material-ui/icons/Group";
import NextWeekIcon from "@material-ui/icons/NextWeek";

import {SidebarNav } from "./components";

const useStyles = makeStyles(theme => ({
  drawer: {
    width: 240,
    [theme.breakpoints.up("lg")]: {
      marginTop: 64,
      height: "calc(100% - 64px)"
    }
  },
  root: {
    backgroundColor: theme.palette.white,
    display: "flex",
    flexDirection: "column",
    height: "100%",
    padding: theme.spacing(2)
  },
  divider: {
    margin: theme.spacing(2, 0)
  },
  nav: {
    marginBottom: theme.spacing(2)
  }
}));

const Sidebar = props => {
  const { open, variant, onClose, className, ...rest } = props;
 
  const classes = useStyles();

  const pages = [
    {
      title:"1",
      href: "/admin/dashboard",
      icon: <DashboardIcon />,
      type: [2, 5]
    },
    {
      title:"2",
      href: "/admin/users",
      icon: <PeopleIcon />,
      type: [2, 5]
    },
    {
      title:"3",
      href: "/admin/groups",
      icon: <GroupIcon />,
      type: [2, 5]
    },
    {
      title:"4",
      href: "/admin/assignments",
      icon: <NextWeekIcon />,
      type: [2, 5]
    }
  ];

  return (
    <Drawer
      anchor="left"
      classes={{ paper: classes.drawer }}
      onClose={onClose}
      open={open}
      variant={variant}
    >
      <div {...rest} className={clsx(classes.root, className)}>       
        <Divider className={classes.divider} />
        <SidebarNav className={classes.nav} pages={pages} />
      </div>
    </Drawer>
  );
};

Sidebar.propTypes = {
  className: PropTypes.string,
  onClose: PropTypes.func,
  open: PropTypes.bool.isRequired,
  variant: PropTypes.string.isRequired
};

export default Sidebar;
