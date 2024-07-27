import React from "react";

import { Transaction } from "../../models/common";
import Loader from "../Loader";
import TransactionsListItem from "./components/TransactionsListItem";

import "./TransactionsList.css";

type Props = {
  transactions: Transaction[];
  isLoading: boolean;
};

const TransactionsList: React.FC<Props> = ({ transactions, isLoading }) => {
  const lastTransactions = transactions.slice(-3);

  return isLoading ? (
    <Loader />
  ) : (
    <div className="transactionsList">
      {lastTransactions.map((transaction) => (
        <TransactionsListItem key={transaction.id} transaction={transaction} />
      ))}
    </div>
  );
};

export default TransactionsList;
