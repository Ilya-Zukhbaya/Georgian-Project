import { createGlobalStyle } from 'styled-components';

export const darkTheme = {
  body: '#333',
  textColor: '#b3b3b3',
  headingColor: '#b3b3b3',
};

export const lightTheme = {
  body: '#D4D5D4',
  textColor: '#333',
  headingColor: '#d23669',
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
  `;
