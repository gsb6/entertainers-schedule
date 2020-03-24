import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { Blank, Layout } from './layout';

import Initial from './pages/Initial';
import Login from './pages/Login';
import Register from './pages/Register';
import WorkInfo from './pages/WorkInfo';
import Schedule from './pages/Schedule';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route
        exact
        path="/"
        component={() => (
          <Layout>
            <Initial />
          </Layout>
        )}
      />
      <Route
        exact
        path="/login"
        component={() => (
          <Layout>
            <Login />
          </Layout>
        )}
      />
      <Route
        exact
        path="/register"
        component={() => (
          <Layout>
            <Register />
          </Layout>
        )}
      />
      <Route
        exact
        path="/register/workinfo"
        component={() => (
          <Layout>
            <WorkInfo />
          </Layout>
        )}
      />
      <Route
        exact
        path="/schedule"
        component={() => (
          <Blank>
            <Schedule />
          </Blank>
        )}
      />
    </Switch>
  </BrowserRouter>
);

export default Routes;
