import { FunctionComponent } from "react";

import Alert from "@components/Alert";
import ErrorBoundary from "@components/ErrorBoundary";
import FooterMain from "@components/Footer/FooterMain";
import Header from "@components/Header";
import AppContainer from "@containers/AppContainer";

import { AppLayoutProps } from "./interfaces";
import { AppLayoutWrapper } from "./styles";

const AppLayout: FunctionComponent<AppLayoutProps> = ({ children }) => {
  return (
    <AppLayoutWrapper>
      <Header />
      <ErrorBoundary>
        <AppContainer>{children}</AppContainer>
      </ErrorBoundary>
      <Alert />
      <FooterMain />
    </AppLayoutWrapper>
  );
};

export default AppLayout;
