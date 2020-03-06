import React from "react";
import { StateNotes } from "../Notes.store";
import Axios from "axios";


export const NotesContainer = () => {
  const { state, dispatch } = React.useContext(StateNotes);

  React.useEffect(() => {
    async function fetchData(params) {
      const res = await Axios.get("/Notes");
      console.log(res);
    }
    fetchData();
  }, []);

  return <div></div>;
};

export default NotesContainer;
