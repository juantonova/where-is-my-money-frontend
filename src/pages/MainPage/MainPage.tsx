import React, { useEffect } from "react";
import BalanceBlock from "./components/BalanceBlock";

import "./MainPage.css";
import useAccountsInfoStore from "../../stores/AccountsStore";
import useTransactionsInfoStore from "../../stores/TransactionsStore";
import { USER_ID } from "../../consts";
import LastTransactionsBlock from "./components/LastTransactionsBlock";
import ButtonsBlock from "./components/ButtonsBlock";

function MainPage() {
  const { getAccounts } = useAccountsInfoStore();
  const { getTransactions } = useTransactionsInfoStore();

  useEffect(() => {
    getAccounts(USER_ID);
    getTransactions(USER_ID);
  }, []);

  return (
    <div>
      <div className="mainPageWrapper">
        <BalanceBlock />
        <ButtonsBlock />
        <LastTransactionsBlock />
      </div>
    </div>
  );
}

export default MainPage;
