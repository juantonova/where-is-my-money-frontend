// @ts-expect-error use react
import React from "react";
import { Button } from "antd";

import "./ButtonsBlock.css";
import useModalsStore from "../../../../stores/ModalsStore";

const ButtonsBlock = () => {
  const { setIsTransactionCreateModalOpen, setIsAccountCreateModalOpen } = useModalsStore();

  const handleSpend = () => setIsTransactionCreateModalOpen(true);
  const handleAddAccount = () => setIsAccountCreateModalOpen(true)
  return (
    <div className="buttonsBlock">
      <Button className="button gray" onClick={handleAddAccount}>Add account</Button>
      <Button className="button orange" onClick={handleSpend}>
        Spend
      </Button>
    </div>
  );
};

export default ButtonsBlock;
