import React from "react";
import { BankOutlined, CreditCardOutlined } from "@ant-design/icons";

import "./AccountsListItem.css";
import { Account, AccountType } from "../../../../models/common";
import { addThousandSeparators } from "../../../../utils/addThousandSeparators";

type Props = {
  account: Account;
};

const AccountsListItem: React.FC<Props> = ({ account }) => {
  const { sum, name, type } = account;

  return (
    <div className="accountItemWrapper">
      <div className="icon">
        {type === AccountType.CREDIT ? (
          <CreditCardOutlined />
        ) : (
          <BankOutlined />
        )}
      </div>
      <div className="accountInfo">
        {addThousandSeparators(+sum)}
        <span className="categoryInfo">{name}</span>
      </div>
    </div>
  );
};

export default AccountsListItem;
