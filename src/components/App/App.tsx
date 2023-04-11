import { FunctionComponent, Suspense, lazy } from "react";

import Loader from "../Loader";
import ThemeProvider from "../ThemeProvider";

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
