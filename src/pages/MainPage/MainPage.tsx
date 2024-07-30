// @ts-expect-error use react
import React, { useEffect } from "react";
import BalanceBlock from "./components/BalanceBlock";

import "./MainPage.css";
import useAccountsInfoStore from "../../stores/AccountsStore";
import useTransactionsInfoStore from "../../stores/TransactionsStore";
import { USER_ID } from "../../consts";
import LastTransactionsBlock from "./components/LastTransactionsBlock";
import ButtonsBlock from "./components/ButtonsBlock";
import useCategoriesInfoStore from "../../stores/CategoriesStore";
import Header from "../../components/Header";

function MainPage() {
  const { getAccounts } = useAccountsInfoStore();
  const { getTransactions } = useTransactionsInfoStore();
  const { getCategories } = useCategoriesInfoStore();

  useEffect(() => {
    getAccounts(USER_ID);
    getTransactions(USER_ID);
    getCategories(USER_ID);
  }, []);

  return (
    <div className="wrapperWithHeader">
      <div className="mainPageWrapper">
        <BalanceBlock />
        <ButtonsBlock />
        <LastTransactionsBlock />
      </div>
      <Header />
    </div>
  );
}

export default MainPage;
