import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import { Toaster } from "react-hot-toast";

import App from "./App.jsx";
import "./index.css";

/**
 * Entry point for the React application.
 * - Wraps the application in React's StrictMode for highlighting potential problems.
 * - Uses BrowserRouter from react-router for client-side routing.
 * - Renders the main App component.
 * - Includes Toaster from react-hot-toast for toast notifications.
 * - Imports global styles from index.css.
 */

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
      <Toaster />
    </BrowserRouter>
  </StrictMode>
);
