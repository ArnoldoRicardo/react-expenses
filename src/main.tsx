import App from "./app";
import Form from "./form";
import React from "react";
import ReactDOM from "react-dom/client";

const items = [1, 2, 3, 4, 5, 6, 7, 8, 9];

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Form />
    <App items={items} />
  </React.StrictMode>
);
