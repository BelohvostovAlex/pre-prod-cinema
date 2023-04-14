import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    text-decoration: none;
    outline: none;
    list-style: none;
  }

  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  ::-webkit-scrollbar {
    width: 4px;
  }
  ::-webkit-scrollbar-track {
    background-color: #BDBDBD;
  }
  
  ::-webkit-scrollbar-thumb {
    background-color: #D98639;
  }
  
  ::-webkit-scrollbar-thumb:hover {
    background-color: #555;
  }
`;
