import { createGlobalStyle } from 'styled-components';
import { devices } from '../style/devices';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
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
    background-color: #e5e5e5;
    color: #565656;
    font-size: 1.6rem;
  }

  #root {
    display: flex;
    flex-direction: column;
  }

  h1 {
    font-size: 3.2rem;
    font-weight: normal;
  }

  @media ${devices.mobileL} {
    h1 {
      font-size: 2.4rem;
      text-align: center;
    }
  }

  @media ${devices.mobileL} {
    h1 {
      font-size: 2.2rem;
      text-align: center;
      color: #fff;
    }
  }
`;

export default GlobalStyle;
