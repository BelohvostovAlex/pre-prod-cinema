import { FunctionComponent } from "react";

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import { persistor, store } from "@store/index";

import { ReduxProviderProps } from "./interface";

const ReduxProvider: FunctionComponent<ReduxProviderProps> = ({ children }) => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>{children}</PersistGate>
    </Provider>
  );
};

export default ReduxProvider;
