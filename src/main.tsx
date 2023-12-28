import React from "react";
import ReactDOM from "react-dom/client";
import Chord from "@/pages/chord";
import Card from "@/pages/card";
import "./index.css";
import { RecoilRoot } from "recoil";
import { Menu } from "./components/Menu";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./pages/Home";

const router = createBrowserRouter([
  {
    path: "/chord",
    element: <Chord></Chord>,
  },
  {
    path: "/card",
    element: <Card></Card>,
  },
  {
    path: "/",
    element: <Home></Home>,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RecoilRoot>
      <Menu>
        <RouterProvider router={router}></RouterProvider>
      </Menu>
    </RecoilRoot>
  </React.StrictMode>
);
