import * as React from "react";
import { Route, Redirect, RouteProps, NavLink } from "react-router-dom";
import Navbar from "../navbar/Navbar";

interface PrivateRouteProps extends RouteProps {
  // tslint:disable-next-line:no-any
  component: any;
  //   isSignedIn: boolean;
}

const PrivateRoute = (props: PrivateRouteProps) => {
  const { component: Component, ...rest } = props;

  return (
    <Route
      {...rest}
      render={
        routeProps => (
          <React.Fragment>
            <Navbar />
            <Component {...routeProps} />
          </React.Fragment>
        )
        // isSignedIn ? (
        //   <Component {...routeProps} />
        // ) : (
        //   <Redirect
        //     to={{
        //       pathname: "/signin",
        //       state: { from: routeProps.location }
        //     }}
        //   />
        // )
      }
    />
  );
};

export default PrivateRoute;
