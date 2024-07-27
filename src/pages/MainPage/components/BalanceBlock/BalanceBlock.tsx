// @ts-expect-error use react
import React from "react";
import "./BalanceBlock.css";
import useAccountsInfoStore from "../../../../stores/AccountsStore";
import Loader from "../../../../components/Loader";

const BalanceBlock = () => {
  const { accountSum, isAccountsLoading } = useAccountsInfoStore();

  return (
    <div className="balanceBlockWrapper">
      <div className="header">Balance</div>

      {isAccountsLoading ? (
        <Loader />
      ) : (
        <div className="totalSum">{accountSum}</div>
      )}
    </div>
  );
};

export default BalanceBlock;
