import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "@config/i18n";
import "@lib/firebase.prod";
import App from "@components/App/App";
import ReduxProvider from "@containers/ReduxProvider";
import GlobalStyle from "@styles/global";

const rootDomNode = document.getElementById("root") as HTMLElement;
const root = createRoot(rootDomNode);

root.render(
  <StrictMode>
    <ReduxProvider>
      <BrowserRouter>
        <GlobalStyle />
        <App />
      </BrowserRouter>
    </ReduxProvider>
  </StrictMode>,
);
