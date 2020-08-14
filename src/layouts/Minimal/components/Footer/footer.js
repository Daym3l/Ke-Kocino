import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/styles";
import { Typography, Container, Grid } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  root: { fontSize: "1rem" },
  typography: {
    textAlign: "right"
  }
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <footer>
      <Container className={classes.root}>
        <Grid container spacing={2}>
          <Grid item md={6} xs={12}>
            <Typography variant="body1" className={classes.typography}>
              &copy; 2020 -{" "}
              <b>CorePlus Servicios Clínicos y Patológicos, LLC</b>
            </Typography>
            <Typography variant="body1" className={classes.typography}>
              All Rights Reserved
            </Typography>
          </Grid>
          <Grid item md={6} xs={12}>
            <Typography variant="body1">
              <b>T.</b> (866) 300-4752
            </Typography>
            <Typography variant="body1">
              <b>E.</b> wecare.support@corepluspr.com
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
};

Footer.propTypes = {
  className: PropTypes.string
};

export default Footer;
