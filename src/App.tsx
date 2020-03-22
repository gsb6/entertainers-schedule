import React from 'react';
import GlobalStyle from './style/global';
import Header from './layout/Header';
import Wrapper from './layout/Wrapper';
import Aside from './layout/Aside';
import Content from './layout/Content';

const App: React.FC = () => (
  <>
    <GlobalStyle />
    <Header />
    <Wrapper>
      <Aside />
      <Content />
    </Wrapper>
  </>
);

export default App;
