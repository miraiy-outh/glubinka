import { ThemeProvider } from "@mui/material";
import theme from "./theme/theme";
import { Provider } from "react-redux";
import { store } from "./services/store";
import { RootPage } from "./pages/root-page";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <RootPage />
      </Provider>
    </ThemeProvider>
  );
}

export default App;
