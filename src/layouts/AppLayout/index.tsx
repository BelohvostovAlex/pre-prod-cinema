import { FunctionComponent } from "react";

import Alert from "@components/Alert";
import Container from "@components/Container";
import ErrorBoundary from "@components/ErrorBoundary";
import FooterMain from "@components/Footer/FooterMain";
import Header from "@components/Header";

import { AppLayoutProps } from "./interfaces";
import { AppLayoutWrapper } from "./styles";

const AppLayout: FunctionComponent<AppLayoutProps> = ({ children }) => {
  return (
    <AppLayoutWrapper>
      <Header />
      <ErrorBoundary>
        <Container>{children}</Container>
      </ErrorBoundary>
      <Alert />
      <FooterMain />
    </AppLayoutWrapper>
  );
};

export default AppLayout;
