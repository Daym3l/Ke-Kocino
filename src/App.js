import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import ROUTES from "./Routes/Routes";
import { ThemeProvider } from "@material-ui/core/styles";
import { themeLogin } from "./theme/login.theme";

class App extends React.Component {
  render() {
    return (
      <ThemeProvider theme={themeLogin}>
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
      </ThemeProvider>
    );
  }
}

export default App;
