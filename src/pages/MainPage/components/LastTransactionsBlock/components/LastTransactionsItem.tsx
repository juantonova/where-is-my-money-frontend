import React from "react";
import {
  Transaction,
  TransactionType,
} from "../../../../../components/models/common";
import { ArrowDownOutlined, ArrowUpOutlined } from "@ant-design/icons";

import "./LastTransactionsItem.css";
import { addThousandSeparators } from "../../../../../utils/addThousandSeparators";

type Props = {
  transaction: Transaction;
};

const LastTransactionsItem: React.FC<Props> = ({ transaction }) => {
  const { sum, name, type } = transaction;

  return (
    <div className="lastTransactionItemWrapper">
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

export default LastTransactionsItem;
