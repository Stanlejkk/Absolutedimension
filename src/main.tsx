import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { LocaleProvider } from "./i18n";
import { CartProvider } from "./lib/CartContext";
import { AuthProvider } from "./lib/AuthContext";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <LocaleProvider>
      <AuthProvider>
        <CartProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </CartProvider>
      </AuthProvider>
    </LocaleProvider>
  </StrictMode>,
);
