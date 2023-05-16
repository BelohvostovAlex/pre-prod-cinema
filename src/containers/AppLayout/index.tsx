import { FunctionComponent } from "react";

import Alert from "../../components/Alert";
import AppContainer from "../AppContainer";
import ErrorBoundary from "../../components/ErrorBoundary";
import FooterMain from "../../components/Footer/FooterMain";
import Header from "../../components/Header";

import { AppLayoutWrapper } from "./styles";
import { AppLayoutProps } from "./interfaces";

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
