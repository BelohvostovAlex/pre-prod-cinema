import { FunctionComponent } from "react";
import styled from "styled-components";

import ThemeProvider from "../ThemeProvider";
import AppLayout from "../../layouts/AppLayout";
import AppRouter from "../AppRouter";

import { useActions } from "../../hooks/useActionts";

const Box = styled.div`
  color: ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.backgroundColor};
  ${({ theme }) => theme.typography.inria_l_ital_32};
`;

const App: FunctionComponent = () => {
  const { changeTheme } = useActions();
  const changeThemeHandler = () => changeTheme();
  return (
    <ThemeProvider>
      <h1>App</h1>
      <Box>hello</Box>
      <button onClick={changeThemeHandler}>change theme</button>
      <AppLayout>
        <AppRouter />
      </AppLayout>
    </ThemeProvider>
  );
};

export default App;
