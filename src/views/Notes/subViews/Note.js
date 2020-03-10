import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
  Divider
} from "@material-ui/core";
import PropTypes from "prop-types";

const useStyles = makeStyles(theme => ({
  root: {
    minWidth: 275,
    margin: 8,
    backgroundColor: theme.palette.secondary.paper
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14
  },
  description: {
    marginTop: 4
  },
  pos: {
    marginBottom: 12
  }
}));

const Note = props => {
  const classes = useStyles();
  const { note, handlerDelete } = props;

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography
          className={classes.title}
          variant="h5"
          color="textSecondary"
          gutterBottom
        >
          <b>{note.title}</b>
        </Typography>
        <Divider />
        <Typography variant="body2" component="p">
          {note.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => handlerDelete(note.id)}>
          Delete
        </Button>
        <Button size="small">
          Edit
        </Button>
      </CardActions>
    </Card>
  );
};

Note.propTypes = {
  note: PropTypes.any,
  handlerDelete: PropTypes.func
};
export default React.memo(Note);
