import Router from "./routes/index";
import { QueryClient, QueryClientProvider } from "react-query";

import "./style.css";
import { ThemeProvider, createTheme } from "@mui/material";
import { deepPurple, amber } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: deepPurple,
    secondary: amber,
  },
});

function App() {
  const queryClient = new QueryClient();
  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <Router />
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
