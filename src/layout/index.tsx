import React from 'react';

import Header from './Header';
import Wrapper from './Wrapper';
import Aside from './Aside';
import Content from './Content';

export const Blank: React.FC = ({ children }) => (
  <>
    <Header />
    {children}
  </>
);

export const Layout: React.FC = ({ children }) => (
  <>
    <Header />
    <Wrapper>
      <Aside />
      <Content>{children}</Content>
    </Wrapper>
  </>
);
