import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "./i18n";
import reportWebVitals from "./reportWebVitals";

import ReduxProvider from "./components/ReduxProvider";
import App from "./components/App/App";

import "./index.css";
import AppLayout from "./layouts/AppLayout";

const rootDomNode = document.getElementById("root") as HTMLElement;
const root = createRoot(rootDomNode);

root.render(
  <StrictMode>
    <ReduxProvider>
      <BrowserRouter>
        <AppLayout>
          <App />
        </AppLayout>
      </BrowserRouter>
    </ReduxProvider>
  </StrictMode>,
);

reportWebVitals();
