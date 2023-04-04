import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "./i18n";
import "./lib/firebase.prod";
import reportWebVitals from "./reportWebVitals";

import ReduxProvider from "./components/ReduxProvider";
import App from "./components/App/App";

import GlobalStyle from "./styles/global";

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

reportWebVitals();
