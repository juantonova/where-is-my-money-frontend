// @ts-expect-error use react
import React from "react";
import useTransactionsInfoStore from "../../../../stores/TransactionsStore";

import TransactionsList from "../../../../components/TransactionsList";

const LastTransactionsBlock = () => {
  const { transactions, isTransactionsLoading } = useTransactionsInfoStore();

  const lastTransactions = transactions.slice(-3);

  return (
    <div>
      <div className="header">Last Transactions</div>
      <TransactionsList
        transactions={lastTransactions}
        isLoading={isTransactionsLoading}
      />
    </div>
  );
};

export default LastTransactionsBlock;
