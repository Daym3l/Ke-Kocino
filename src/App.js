import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import ROUTES from "./Routes/Routes";
import { ThemeProvider } from "@material-ui/core/styles";
import { themeLogin } from "./theme/login.theme";
import axios from "axios";
import { NotesProviders } from "./views/Notes/Notes.store";

axios.defaults.baseURL = "http://localhost:1862/api";
axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*";

class App extends React.Component {
  render() {
    return (
      <ThemeProvider theme={themeLogin}>
        <NotesProviders>
          <BrowserRouter>
            <Switch>
              {ROUTES.map((_route, key) => {
                const { path, component } = _route;
                return (
                  <Route exact path={path} key={key} component={component} />
                );
              })}
              <Redirect from="**" to="/" />
            </Switch>
          </BrowserRouter>
        </NotesProviders>
      </ThemeProvider>
    );
  }
}

export default App;
