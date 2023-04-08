import { FunctionComponent } from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import { ReduxProviderProps } from "./interface";
import { persistor, store } from "../../store";

const ReduxProvider: FunctionComponent<ReduxProviderProps> = ({ children }) => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>{children}</PersistGate>
    </Provider>
  );
};

export default ReduxProvider;
