import { createGlobalStyle } from 'styled-components';
import clownImage from '../assets/humberto-chavez-7MZclz4GQE8-unsplash.jpg';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100%;
  }

  #root {
    display: flex;
    flex-direction: column;
  }

  body {
    margin: 0;
    background-color: #e5e5e5;
    font-family: Quicksand, 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 36px;
    color: #565656;
  }

  main {
    flex: 1;
    width: 30%;
    max-width: 670px;
    background: url(${clownImage});
    background-size: cover;
    background-position-x: center;
    background-position-y: top;
  }

  article {
    height: 100%;
    background: linear-gradient(161.88deg, #FC66A4 0%, #993CFF 98.7%);
    opacity: 0.8;
  }
`;

export default GlobalStyle;