import { FunctionComponent, Suspense, lazy } from "react";

import MainLoader from "cinema-components-lib/Loaders/MainLoader";

import ThemeProvider from "../../containers/ThemeProvider";

const AppLayout = lazy(() => import("../../containers/AppLayout"));
const AppRouter = lazy(() => import("../../routes/AppRouter"));

const App: FunctionComponent = () => {
  return (
    <ThemeProvider>
      <Suspense fallback={<MainLoader />}>
        <AppLayout>
          <AppRouter />
        </AppLayout>
      </Suspense>
    </ThemeProvider>
  );
};

export default App;
