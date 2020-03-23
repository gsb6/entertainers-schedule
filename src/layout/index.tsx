import React from 'react';

import Header from './Header';
import Wrapper from './Wrapper';
import Aside from './Aside';
import Content from './Content';

const Layout: React.FC = ({ children }) => (
  <>
    <Header />
    <Wrapper>
      <Aside />
      <Content>{children}</Content>
    </Wrapper>
  </>
);

export default Layout;
