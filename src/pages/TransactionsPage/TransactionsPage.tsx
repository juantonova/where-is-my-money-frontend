// @ts-expect-error use react
import React, { useEffect } from "react";
import useTransactionsInfoStore from "../../stores/TransactionsStore";
import { USER_ID } from "../../consts";
import TransactionsList from "../../components/TransactionsList";
import { TransactionType } from "../../models/common";
import Header from "../../components/Header";

import "./TransactionPage.css"

const TransactionsPage = () => {
  const { getTransactions, transactions, isTransactionsLoading } =
    useTransactionsInfoStore();

  useEffect(() => {
    getTransactions(USER_ID);
  }, []);

  const incomes = transactions.filter(
    (el) => el.type === TransactionType.REVENUE,
  );
  const expenses = transactions.filter(
    (el) => el.type === TransactionType.EXPENSE,
  );

  return (
    <div className="wrapperWithHeader">
      <div className="transactionPageWrapper">
      <div>
        <div className="header">Incomes</div>
        <TransactionsList
          transactions={incomes}
          isLoading={isTransactionsLoading}
        />
      </div>
      <div>
        <div className="header">Expenses</div>
        <TransactionsList
          transactions={expenses}
          isLoading={isTransactionsLoading}
        />
      </div>
      </div>
      <Header />
    </div>
  );
};

export default TransactionsPage;
