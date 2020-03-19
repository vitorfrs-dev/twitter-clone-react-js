import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function PrivateRoute({ children, ...rest }) {
  const signed = useSelector(state => state.auth.signed);

  return (
    <Route
      {...rest}
      render={({ location }) =>
        signed ? (
          children
        ) : (
            <Redirect
              to={{
                pathname: '/signin',
                state: { from: location },
              }}
            />
          )
      }
    />
  );
}
