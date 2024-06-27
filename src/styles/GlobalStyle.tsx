import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import WantedSansRegular from "../fonts/WantedSans-Regular.woff2";

const GlobalStyle = createGlobalStyle`
    ${reset}

    html, body, #root {
        height: 100%;
    }

      @font-face {
        font-family: 'WantedSansRegular';
        src: local('WantedSansRegular'), local('WantedSansRegular');
        font-style: normal;
        src: url(${WantedSansRegular}) format('truetype');
  }
`;

export default GlobalStyle;
