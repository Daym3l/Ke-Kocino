import React, { useEffect, useState } from "react";
import { app } from "../config/Firebase.config";
import Loading from "../components/loading/m.loading";

export const Auth = React.createContext();

export const AuthContext = ({ children }) => {
  const [usuario, setUsuario] = useState(null);
  const [showChild, setShowChild] = useState(false);

  const singout = () => {
    setUsuario(null);
    app.auth().signOut();
  };

  useEffect(() => {
    app.auth().onAuthStateChanged(function(user) {
      setUsuario(user);
      setShowChild(true);
    });
  }, []);

  if (!showChild) {
    return <Loading />;
  } else {
    return (
      <Auth.Provider
        value={{
          usuario,
          logout: singout
        }}
      >
        {children}
      </Auth.Provider>
    );
  }
};
