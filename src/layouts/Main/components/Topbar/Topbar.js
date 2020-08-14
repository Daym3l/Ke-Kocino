import React from "react";
import { Link as RouterLink } from "react-router-dom";
import clsx from "clsx";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/styles";
import { AppBar, Toolbar, IconButton } from "@material-ui/core";

import InputIcon from "@material-ui/icons/Input";
import Menu from "@material-ui/icons/Menu";

const useStyles = makeStyles(theme => ({
  root: {
    boxShadow: "none"
  },
  flexGrow: {
    flexGrow: 1
  },
  signOutButton: {
    marginLeft: theme.spacing(1)
  },
  logo: {
    width: "9rem"
  }
}));

const Topbar = props => {
  const { className, onSidebarOpen, openSidebar, ...rest } = props;
  const classes = useStyles();

  return (
    <AppBar {...rest} className={clsx(classes.root, className)}>
      <Toolbar>
        {!openSidebar && (
          <IconButton
            className={classes.signOutButton}
            color="inherit"
            onClick={onSidebarOpen}
          >
            <Menu />
          </IconButton>
        )}
        <RouterLink to="/">
          <img
            className={classes.logo}
            alt="Logo"
            src="/assets/logo.png"
          />
        </RouterLink>
        <div className={classes.flexGrow} />

        <IconButton className={classes.signOutButton} color="inherit">
          <InputIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

Topbar.propTypes = {
  className: PropTypes.string,
  onSidebarOpen: PropTypes.func
};

export default Topbar;
