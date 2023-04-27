import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { FavoritesContextProvider } from "./store/favorites-context";

ReactDOM.createRoot(document.getElementById("root")).render(
  <FavoritesContextProvider>
    <App />
  </FavoritesContextProvider>
);
