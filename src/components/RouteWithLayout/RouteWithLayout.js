import React from "react";
import { Route } from "react-router-dom";
import PropTypes from "prop-types";
import Loading from "../loading/m.loading";

const RouteWithLayout = props => {
  const { layout: Layout, component: Component, ...rest } = props;

  return (
    <Route
      {...rest}
      render={matchProps => (
        <Layout>
          <React.Suspense fallback={<Loading/>}>
            <Component {...matchProps} />
          </React.Suspense>
        </Layout>
      )}
    />
  );
};

RouteWithLayout.propTypes = {
  component: PropTypes.any.isRequired,
  layout: PropTypes.any.isRequired,
  path: PropTypes.string
};

export default RouteWithLayout;
