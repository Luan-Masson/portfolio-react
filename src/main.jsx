import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import 'primeicons/primeicons.css';
import { PrimeReactProvider } from "primereact/api";
import { LanguageProvider } from "./contexts/LanguageContext.jsx";
import { ThemeProvider } from "./contexts/ThemeContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <PrimeReactProvider>
      <ThemeProvider>
        <LanguageProvider>
          <App />
        </LanguageProvider>
      </ThemeProvider>
    </PrimeReactProvider>
  </React.StrictMode>
);
