import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.scss";
import App from "./App";
import { PayquityContextProvider } from "./context/Context";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <PayquityContextProvider>
        <App />
      </PayquityContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
