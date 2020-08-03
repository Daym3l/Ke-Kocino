import React from "react";
import Note from "./Note";
import Axios from "axios";
import { GridList, GridListTile } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Websocket from 'react-websocket';
const useStyles = makeStyles(theme => ({
  root: {   
    flexWrap: "wrap",
    padding:10,
    justifyContent: "space-around",
    overflow: "hidden",
   
  },

}));

export const NotesContainer = () => {
  const [notes, setNotes] = React.useState([]);
  const classes = useStyles();

  async function fetchData() {
    const res = await Axios.get("/Notes");
    if (res.status === 200) {
      setNotes(res.data);
    }
  }
  async function deleteNote(id) {
    const res = await Axios.delete(`/Notes/${id}`);
    if (res.status === 200) {
      fetchData();
    }
  }

  React.useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className={classes.root}>      
      <GridList cellHeight={160} cols={4}>
        {notes.length > 0 &&
          notes.map(item => (
            <GridListTile key={item.id} cols={1}>
              <Note note={item} handlerDelete={deleteNote} />
            </GridListTile>
          ))}
      </GridList>
    </div>
  );
};

export default NotesContainer;
