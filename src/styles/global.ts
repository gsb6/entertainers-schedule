import { createGlobalStyle } from 'styled-components';
import { devices } from './devices';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  html, body {
    font-family: Quicksand;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
  }

  html, body, #root {
    min-width: 320px;
    height: 100%;
  }

  body {
    background-color: ${({ theme }) => theme.palette.background};
    color: ${({ theme }) => theme.palette.text};
    font-size: 1.6rem;
  }

  #root {
    display: flex;
    flex-direction: column;
  }

  hr {
    margin: 1em 0;
    border: 0;
    border-top: 1px solid #ccc;
  }

  h1 {
    font-size: 3.2rem;
    font-weight: normal;
  }

  a {
    background-color: transparent;
    text-decoration: none;
    color: #e77cca;

  &:hover {
    text-decoration: underline;
  }
  }

  @media ${devices.mobileL} {
    h1 {
      font-size: 2.8rem;
      text-align: center;
      color: #fff;
    }
  }
`;

export default GlobalStyle;
