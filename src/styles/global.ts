import { createGlobalStyle } from "styled-components";

import { Colors } from "../constants/styles/colors";

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
    background-color: ${Colors.LIGHT_GRAY};
  }
  
  ::-webkit-scrollbar-thumb {
    background-color:  ${Colors.ORANGE};
  }
  
  ::-webkit-scrollbar-thumb:hover {
    background-color:${Colors.DARK_GRAY};
  }
`;
