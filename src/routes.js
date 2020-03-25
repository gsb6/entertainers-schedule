import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { ApplicationState } from './store';
import { Blank, Layout } from './layout';

import Initial from './pages/Initial';
import Login from './pages/Login';
import Register from './pages/Register';
import WorkInfo from './pages/WorkInfo';
import Schedule from './pages/Schedule';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { signed } = useSelector((state) => state.user);

  return (
    <Route
      {...rest}
      render={(props) =>
        signed ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: '/', state: { from: props.location } }} />
        )
      }
    />
  );
};

const Routes = () => {
  return (
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
        <PrivateRoute
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
};

export default Routes;
