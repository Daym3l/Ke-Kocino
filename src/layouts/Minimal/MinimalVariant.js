import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/styles";
import Footer from "./components/Footer/footer";

const useStyles = makeStyles(() => ({
  root: {
    height: "100vh"
  },
  content: {
    height: "100vh",
    backgroundImage: "url(/assets/img/auth.jpg)",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center"
  }
}));

const Minimal = props => {
  const { children } = props;

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <main className={classes.content}>
        {children}
        <Footer />
      </main>
    </div>
  );
};

Minimal.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

export default Minimal;
