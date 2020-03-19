import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import PrivateRoute from './components/PrivateRoute';
import HeaderApp from './components/HeaderApp';

import Dashboard from './pages/Dashboard';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Profile from './pages/Profile';

export const history = createBrowserHistory();

const Routes = () => {
  return (
    <Router history={history}>
      <Switch>
        <PrivateRoute path="/" exact>
          <HeaderApp />
          <Dashboard />
        </PrivateRoute>
        <Route path="/profile" component={Profile} />
        <Route path="/signin" exact component={SignIn} />
        <Route path="/signup" exact component={SignUp} />
      </Switch>
    </Router>
  );
};

export default Routes;
