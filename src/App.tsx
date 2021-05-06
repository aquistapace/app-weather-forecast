import React from "react";
import Dashboard from "./pages/index";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import theme from "./styles/Theme/defaultTheme";
// import Tooltip from "./react-tooltip-basic";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Dashboard></Dashboard>
      </ThemeProvider>
    </>
  );
}

export default App;
