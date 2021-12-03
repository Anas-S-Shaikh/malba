import "./App.css";
import RoutesProvider from "./RoutesProvider";
import { Sidebar } from "./Components/Sidebar/Sidebar";
import { ThemeProvider } from "@emotion/react";
import { theme } from "./theme";
import { MainLayout } from "./Layouts/MainLayout";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        {/* Malba Project */}
        <MainLayout>
          <RoutesProvider />
        </MainLayout>
      </div>
    </ThemeProvider>
  );
}

export default App;
