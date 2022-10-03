import { createGlobalStyle } from 'styled-components';

export const darkTheme = {
  body: '#333',
  textColor: '#fff',
  headingColor: 'lightblue',
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
  `;
