import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    font-family: Roboto, 'Helvetica Neue', Helvetica, Arial, sans-serif;
    margin: 0;
  }

  body.fontLoaded {
    font-family: Roboto, 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }
`;

export default GlobalStyle;
