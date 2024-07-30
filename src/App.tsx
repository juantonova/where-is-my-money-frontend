// @ts-expect-error use react
import React from "react";

import "./App.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import { AppRoutes } from "./models/common";
import Logo from "./components/Logo/Logo";
import TransactionsPage from "./pages/TransactionsPage";
import TransactionCreateModal from "./components/TransactionCreateModal";
import AccountsPage from "./pages/AccountsPage/AccountsPage";

import "./App.css";
import AccountCreateModal from "./components/AccountCreateModal";

const router = createBrowserRouter([
  {
    path: AppRoutes.HOME,
    element: <MainPage />,
  },
  {
    path: AppRoutes.TRANSACTIONS,
    element: <TransactionsPage />,
  },
  {
    path: AppRoutes.ACCOUNTS,
    element: <AccountsPage />,
  },
]);

function App() {
  return (
    <div className="app">
      <Logo />
      <RouterProvider router={router} />

      <TransactionCreateModal />
      <AccountCreateModal />
    </div>
  );
}

export default App;
