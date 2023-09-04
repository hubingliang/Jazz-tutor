import React from "react";
import ReactDOM from "react-dom/client";
import Chord from "@/pages/chord";
import "./index.css";
import { RecoilRoot } from "recoil";
import { Menu } from "./components/Menu";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/chord",
    element: <Chord></Chord>,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RecoilRoot>
      <Menu>
        <RouterProvider router={router}></RouterProvider>
        {/* <App /> */}
      </Menu>
    </RecoilRoot>
  </React.StrictMode>
);
