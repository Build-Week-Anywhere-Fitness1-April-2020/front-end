import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {

  const privCheck = localStorage.getItem('role')
  console.log(privCheck)
  return (
    <Route
      {...rest}
      render={props => {
        if (privCheck !== "client") {
          return <Component {...props} />; // component passed into props
        } else {
          return <Redirect to="/classes" />;
        }
      }}
    />
  );
};

export default PrivateRoute;