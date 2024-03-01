import React from "react";
import ReactDOM from "react-dom/client";

///app component
import App from "./App";

///context provider
import PhotoContextProvider from "./context/PhotoContextProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <PhotoContextProvider>
    <App />
  </PhotoContextProvider>
);
