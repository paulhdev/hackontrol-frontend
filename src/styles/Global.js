import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
  }

  @import url('https://fonts.googleapis.com/css?family=Montserrat:600&display=swap');

  body {
    /* font-family: 'Montserrat', sans-serif; */
    color: #000;
    * {
      font-family: 'Montserrat', sans-serif;
    }
  }
`;

export default GlobalStyle;
