import { FunctionComponent } from "react";

import { AppLayoutProps } from "./interfaces";
import ErrorBoundary from "../../components/ErrorBoundary";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Alert from "../../components/Alert";

const AppLayout: FunctionComponent<AppLayoutProps> = ({ children }) => {
  return (
    <div>
      <Header />
      <ErrorBoundary>{children}</ErrorBoundary>
      <Alert />
      <Footer />
    </div>
  );
};

export default AppLayout;
