import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import store from './store';
import theme from './styles/theme';
import GlobalStyle from './styles/global';
import Routes from './routes';

const App: React.FC = () => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Routes />
    </ThemeProvider>
  </Provider>
);

export default App;
