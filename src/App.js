import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Redirect } from "react-router-dom";
import ROUTES from "./Routes/Routes";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./theme";
import RouteWithLayout from "./components/RouteWithLayout/RouteWithLayout";
import { SnackbarProvider } from "notistack";

class App extends React.Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <SnackbarProvider
          maxSnack={3}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right"
          }}
        >
          <BrowserRouter>
            <Switch>
              {ROUTES.map((_route, key) => {
                const { path, component, layout } = _route;
                return (
                  <RouteWithLayout
                    exact
                    path={path}
                    key={key}
                    component={component}
                    layout={layout}
                  />
                );
              })}
              <Redirect from="**" to="/" />
            </Switch>
          </BrowserRouter>
        </SnackbarProvider>
      </ThemeProvider>
    );
  }
}

export default App;
