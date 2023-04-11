import { FunctionComponent } from "react";

import Alert from "../../components/Alert";
import Container from "../../components/Container";
import ErrorBoundary from "../../components/ErrorBoundary";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

import { AppLayoutWrapper } from "./styles";
import { AppLayoutProps } from "./interfaces";

const AppLayout: FunctionComponent<AppLayoutProps> = ({ children }) => {
  return (
    <AppLayoutWrapper>
      <Header />
      <ErrorBoundary>
        <Container>{children}</Container>
      </ErrorBoundary>
      <Alert />
      <Footer />
    </AppLayoutWrapper>
  );
};

export default AppLayout;
