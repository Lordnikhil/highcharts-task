import React from "react";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";

export const ProtectedRoute = ({
  component: Component,
  ...rest
}) => {
    const checkLogin = useSelector(state=>state.isLogged)
    console.log(checkLogin)
  return (
    <Route
      {...rest}
      render={props => {
        if (checkLogin) {
          return <Component {...props} />;
        } else {
          return (
            <Redirect
              to={{
                pathname: "/",
                state: {
                  from: props.location
                }
              }}
            />
          );
        }
      }}
    />
  );
};

export default ProtectedRoute;