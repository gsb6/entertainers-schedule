import React from 'react';
import GlobalStyle from './style/global';
import Layout from './layout';
import Routes from './routes';

const App: React.FC = () => (
  <>
    <GlobalStyle />
    <Layout>
      <Routes />
    </Layout>
  </>
);

export default App;
