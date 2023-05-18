import { ToolkitStore } from "@reduxjs/toolkit/dist/configureStore";

import { Cypress } from "cypress";
declare global {
  interface Window {
    Cypress: Cypress;
    store: ToolkitStore;
  }
}
