import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import Auth from "./service/auth";

const auth = new Auth();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App auth={auth} />
  </React.StrictMode>
);
