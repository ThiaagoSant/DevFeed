import Router from "./routes/index";
import { QueryClient, QueryClientProvider } from "react-query";

import "./style.css";

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
    </QueryClientProvider>
  );
}

export default App;
