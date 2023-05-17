import { FunctionComponent, Suspense, lazy } from "react";

import ThemeProvider from "@containers/ThemeProvider";
import MainLoader from "cinema-components-lib/Loaders/MainLoader";

const AppLayout = lazy(() => import("@containers/AppLayout"));
const AppRouter = lazy(() => import("@routes/AppRouter"));

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
