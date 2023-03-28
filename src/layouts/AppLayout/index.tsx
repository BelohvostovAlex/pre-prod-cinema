import { FunctionComponent } from "react";

import ErrorBoundary from "../../components/ErrorBoundary";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

import { AppLayoutProps } from "./interfaces";

const AppLayout: FunctionComponent<AppLayoutProps> = ({ children }) => {
  return (
    <div>
      <Header />
      <ErrorBoundary>{children}</ErrorBoundary>
      <Footer />
    </div>
  );
};

export default AppLayout;
