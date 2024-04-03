import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { Router } from "./Router";
import { AppContextProvider } from "./context";

const App = () => {
  return (
    <AppContextProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </AppContextProvider>
  );
};

export { App };
