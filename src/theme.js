import { createGlobalStyle } from 'styled-components';

export const darkTheme = {
  body: '#333 !important',
  textColor: '#b3b3b3 !important',
  headingColor: '#b3b3b3 !important',
};

export const lightTheme = {
  body: '#D4D5D4 !important',
  textColor: '#333 !important',
  headingColor: '#333 !important',
};

export const GlobalStyles = createGlobalStyle`
   body {
    background: ${(props) => props.theme.body};
    color: ${(props) => props.theme.textColor};
   }
   h2{
     color: ${(props) => props.theme.headingColor};
   }
   a {
    color: ${(props) => props.theme.textColor};
   }
   span {
    color: ${(props) => props.theme.textColor};
   }
   button {
    color: ${(props) => props.theme.textColor};
   }
  `;
