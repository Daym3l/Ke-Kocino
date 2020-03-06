import React from "react";

const initState = {
  notes: [],
  user: null
};

export const StateNotes = React.createContext(initState);

function reducer(state, action) {
  const { type, params } = action;
  switch (type) {
    case "FETCH":
      return { ...state, notes: params };

    case "LOGIN":
      return { ...state, user: params };

    default:
      return state;
  }
}

export const NotesProviders = props => {
  const { children } = props;
  const [state, dispatch] = React.useReducer(reducer, initState);
  return (
    <StateNotes.Provider value={{ state, dispatch }}>
      {children}
    </StateNotes.Provider>
  );
};
