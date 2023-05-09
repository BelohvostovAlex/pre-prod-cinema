import { FunctionComponent, Suspense, lazy } from "react";

import MainLoader from "../Loader/MainLoader";
import ThemeProvider from "../ThemeProvider";

const AppLayout = lazy(() => import("@layouts/AppLayout"));
const AppRouter = lazy(() => import("../AppRouter"));

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
