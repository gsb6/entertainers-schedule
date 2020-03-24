import React from 'react';

import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import Initial from './pages/Initial';
import Login from './pages/Login';
import Register from './pages/Register';
import WorkInfo from './pages/WorkInfo';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Initial} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/register/workinfo" component={WorkInfo} />
    </Switch>
  </BrowserRouter>
);

export default Routes;