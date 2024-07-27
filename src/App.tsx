// @ts-expect-error use react
import React from "react";

import "./App.css";

import Header from "./components/Header";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import { AppRoutes } from "./models/common";
import Logo from "./components/Logo/Logo";
import TransactionsPage from "./pages/TransactionsPage";
import TransactionCreateModal from "./components/TransactionCreateModal";

const router = createBrowserRouter([
  {
    path: AppRoutes.HOME,
    element: <MainPage />,
  },
  {
    path: AppRoutes.TRANSACTIONS,
    element: <TransactionsPage />,
  },
]);

function App() {
  return (
    <div>
      <Logo />
      <RouterProvider router={router} />
      <Header />
      <TransactionCreateModal />
    </div>
  );
}

export default App;
