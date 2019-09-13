import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
  }

  @import url('https://fonts.googleapis.com/css?family=Montserrat:400,500,600,700&display=swap');

  body {
    font-family: 'Montserrat', sans-serif;
    color: #000;
  }
`;

export default GlobalStyle;
