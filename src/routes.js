import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { Blank, Layout } from './layout';

import Home from './pages/Home';
import Login from './pages/Login';
import FirstStep from './pages/Register/FirstStep';
import SecondStep from './pages/Register/SecondStep';
import Schedule from './pages/Schedule';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { signed } = useSelector((state) => state.user);

  return (
    <Route
      {...rest}
      render={(props) =>
        true ? (
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
              <Home />
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
          path="/register/first-step"
          component={() => (
            <Layout>
              <FirstStep />
            </Layout>
          )}
        />
        <Route
          exact
          path="/register/second-step"
          component={() => (
            <Layout>
              <SecondStep />
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
