import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import 'primeicons/primeicons.css';
import { PrimeReactProvider } from "primereact/api";
import { LanguageProvider } from "./contexts/LanguageContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <PrimeReactProvider>
      <LanguageProvider>
        <App />
      </LanguageProvider>
    </PrimeReactProvider>
  </React.StrictMode>
);
