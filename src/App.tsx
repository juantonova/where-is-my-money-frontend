import React from "react";

import "./App.css";

import Header from "./components/Header";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import { AppRoutes } from "./components/models/common";
import Logo from "./components/Logo/Logo";


const router = createBrowserRouter([
  {
    path: AppRoutes.HOME,
    element: <MainPage />,
  },
]);

function App() {
  return (
    <div>
    <Logo />
    <RouterProvider router={router} />
    <Header />
  </div>
  );
}

export default App;
