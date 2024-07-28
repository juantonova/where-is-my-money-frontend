// @ts-expect-error use react
import React, { useEffect } from "react";
import { USER_ID } from "../../consts";
import useAccountsInfoStore from "../../stores/AccountsStore";
import AccountsList from "../../components/AccountsList";

import "./AccountsPage.css";

const AccountsPage = () => {
  const { getAccounts, accounts, isAccountsLoading } = useAccountsInfoStore();

  useEffect(() => {
    getAccounts(USER_ID);
  }, []);

  return (
    <div className="accountsPageWrapper">
      <div>
        <div className="header">Accounts</div>
        <AccountsList accounts={accounts} isLoading={isAccountsLoading} />
      </div>
    </div>
  );
};

export default AccountsPage;
