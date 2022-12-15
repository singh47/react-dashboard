import React, {componentDidMount} from "react";
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";

import DetailBox from "./components/Box/DetailBox";
import DataListComponent from "./components/DataList/DataList";
import DenseAppBar from "./components/AppBar/AppBar";
import ChartsComponent from "./components/Charts/ChartsComponent";

const App = () => {
  const [theme, colorMode] = useMode();

  return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <main className="content">
            <DenseAppBar />
            <ChartsComponent />
            <DataListComponent />    
          </main>
        </div>
      </ThemeProvider>
  );
};

export default App;
