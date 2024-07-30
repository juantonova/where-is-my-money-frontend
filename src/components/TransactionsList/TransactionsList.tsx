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

  return isLoading ? (
    <Loader />
  ) : (
    <div className="transactionsList">
      {transactions.map((transaction) => (
        <TransactionsListItem key={transaction.id} transaction={transaction} />
      ))}
    </div>
  );
};

export default TransactionsList;
