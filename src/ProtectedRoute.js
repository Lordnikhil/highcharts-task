import React from "react";
import { Route, Redirect } from "react-router-dom";
import Auth from './reducers/isLogged';

export const ProtectedRoute = ({
  component: Component,
  ...rest
}) => {
  
  return (
    <Route
      {...rest}
      render={props => {
        if (Auth.returnAuthToken()) {
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