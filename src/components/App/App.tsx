import { FunctionComponent, Suspense, lazy } from "react";

import ThemeProvider from "../ThemeProvider";
import Loader from "../Loader";

const AppLayout = lazy(() => import("../../layouts/AppLayout"));
const AppRouter = lazy(() => import("../AppRouter"));

const App: FunctionComponent = () => {
  return (
    <ThemeProvider>
      <Suspense fallback={<Loader />}>
        <AppLayout>
          <AppRouter />
        </AppLayout>
      </Suspense>
    </ThemeProvider>
  );
};

export default App;
