import React from "react";

import { Account } from "../../models/common";
import Loader from "../Loader";

import "./AccountsList.css";
import AccountsListItem from "./components/AccountsListItem";

type Props = {
  accounts: Account[];
  isLoading: boolean;
};

const AccountsList: React.FC<Props> = ({ accounts, isLoading }) => {
  return isLoading ? (
    <Loader />
  ) : (
    <div className="accountsList">
      {accounts.map((account) => (
        <AccountsListItem key={account.id} account={account} />
      ))}
    </div>
  );
};

export default AccountsList;
