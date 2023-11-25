import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App.jsx";
import Synth from "./pages/Synth.jsx";

import "@radix-ui/themes/styles.css";
import { Theme, ThemePanel } from "@radix-ui/themes";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Synth />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Theme>
    <React.StrictMode>
      <RouterProvider router={router} />
      {/* <ThemePanel /> */}
    </React.StrictMode>
  </Theme>
);
