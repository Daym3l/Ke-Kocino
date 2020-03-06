import React from "react";
import PropTypes from "prop-types";
import { CircularProgress, Backdrop } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff"
  },
  label: { marginTop: 4, marginLeft: 12 }
}));

const Loading = props => {
  const { blocking } = props;
  const classes = useStyles();
  return (
    <React.Fragment>
      <Backdrop open={blocking} className={classes.backdrop}>
        <CircularProgress color="inherit" />
        <label className={classes.label}>Waiting...</label>
      </Backdrop>
    </React.Fragment>
  );
};
Loading.propTypes = { blocking: PropTypes.bool.isRequired };
Loading.defaultProps = { blocking: true };
export default Loading;
