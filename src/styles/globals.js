import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:300,400,400i,700&display=swap');
  
  body {
    font-family: 'Roboto', sans-serif;
  }

  #root {
    height: 100%;
  }

  html, body {
    height: 100%;
  }

  * {
    margin: 0;
    padding: 0;
  }
`;

export default GlobalStyle;
