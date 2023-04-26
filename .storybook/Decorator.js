import React, { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";

import ReduxProvider from "../src/components/ReduxProvider/index";

export const Decorator = (Story) => (
  <ReduxProvider>
    <BrowserRouter>
      <Story />
    </BrowserRouter>
  </ReduxProvider>
);
