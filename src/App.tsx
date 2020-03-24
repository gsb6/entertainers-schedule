import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import GlobalStyle from './style/global';
import Layout from './layout';
import Routes from './routes';

const App: React.FC = () => (
  <Provider store={store}>
    <GlobalStyle />
    <Layout>
      <Routes />
    </Layout>
  </Provider>
);

export default App;
