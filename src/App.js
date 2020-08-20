import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Redirect, Route } from "react-router-dom";
import ROUTES from "./Routes/Routes";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./theme";
import RouteWithLayout from "./components/RouteWithLayout/RouteWithLayout";
import { SnackbarProvider } from "notistack";
import { Auth } from "./context/Auth.context";
import _ from "lodash";

const App = () => {  
  const {usuario} = React.useContext(Auth);
  const PrivateRoute = ({ component, path, key, layout, ...rest }) => (
    <Route
      {...rest}
      render={props => {
        let option = props.location.pathname.split("/");
        switch (option[1]) {
          case "kekocino":
            {
              
              if (usuario) {
                return (
                  <RouteWithLayout
                    exact
                    key={key}
                    path={path}
                    component={component}
                    layout={layout}
                  />
                );
              } else {
                return <Redirect to="/403" />;
              }
            }

            break;

          default:
            return <Redirect to="/403" />;
        }
      }}
    />
  );

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
              if (_.startsWith(path, "/kekocino")) {
                return (
                  <PrivateRoute
                    path={path}
                    key={key}
                    layout={layout}
                    component={component}
                  />
                );
              }
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
            <Redirect from="**" to="/404" />
          </Switch>
        </BrowserRouter>
      </SnackbarProvider>
    </ThemeProvider>
  );
};

export default App;
