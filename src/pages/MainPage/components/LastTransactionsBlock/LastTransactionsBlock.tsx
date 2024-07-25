import React from "react";
import useTransactionsInfoStore from "../../../../stores/TransactionsStore";
import LastTransactionsItem from "./components/LastTransactionsItem";

import "./LastTransactionInfoBlock.css";
import Loader from "../../../../components/Loader";

const LastTransactionsBlock = () => {
  const { transactions, isTransactionsLoading } = useTransactionsInfoStore();

  const lastTransactions = transactions.slice(-3);

  return (
    <div className="lastTransactionsWrapper">
      <div className="lastTransactionsHeader">Last Transactions</div>
      {isTransactionsLoading ? (
        <Loader />
      ) : (
        lastTransactions.map((transaction) => (
          <LastTransactionsItem
            key={transaction.id}
            transaction={transaction}
          />
        ))
      )}
    </div>
  );
};

export default LastTransactionsBlock;
