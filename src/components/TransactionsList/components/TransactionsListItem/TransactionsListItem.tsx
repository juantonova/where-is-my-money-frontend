import React from "react";
import { ArrowDownOutlined, ArrowUpOutlined } from "@ant-design/icons";

import "./TransactionsListItem.css";
import { Transaction, TransactionType } from "../../../../models/common";
import { addThousandSeparators } from "../../../../utils/addThousandSeparators";

type Props = {
  transaction: Transaction;
};

const TransactionsListItem: React.FC<Props> = ({ transaction }) => {
  const { sum, name, type } = transaction;

  return (
    <div className="transactionItemWrapper">
      <div className="icon">
        {type === TransactionType.REVENUE ? (
          <ArrowUpOutlined />
        ) : (
          <ArrowDownOutlined />
        )}
      </div>
      <div className="transactionInfo">
        {addThousandSeparators(+sum)}
        <span className="categoryInfo">{name}</span>
      </div>
    </div>
  );
};

export default TransactionsListItem;
