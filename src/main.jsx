import React from "react";
import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { PrimeReactProvider } from "primereact/api";
import App from "./App.jsx";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "./styles.css";

const applyInitialTheme = () => {
  try {
    const saved = localStorage.getItem("ambardc-theme");
    const theme =
      saved === "light" || saved === "dark"
        ? saved
        : window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light";
    document.documentElement.dataset.theme = theme;
  } catch {
    document.documentElement.dataset.theme = "light";
  }
};

applyInitialTheme();

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <PrimeReactProvider>
        <App />
      </PrimeReactProvider>
    </QueryClientProvider>
  </React.StrictMode>,
);
