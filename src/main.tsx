import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { GlobalStyle } from "./styles/globalStyle.ts";
import { AppThemeProvider } from "./contexts/AppThemeProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AppThemeProvider>
      <GlobalStyle />
      <App />
    </AppThemeProvider>
  </StrictMode>
);
