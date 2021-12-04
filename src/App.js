import "./App.css";
import RoutesProvider from "./RoutesProvider";
import { ThemeProvider } from "@emotion/react";
import { theme } from "./theme";
import { MainLayout } from "./Layouts/MainLayout";

import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <MainLayout>
          <RoutesProvider />
        </MainLayout>
      </div>
    </ThemeProvider>
  );
}

export default App;
