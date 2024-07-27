// @ts-expect-error use react
import React from "react";
import { Button } from "antd";

import "./ButtonsBlock.css";
import useModalsStore from "../../../../stores/ModalsStore";

const ButtonsBlock = () => {
  const { setIsTransactionCreateModalOpen } = useModalsStore();

  const handleSpend = () => {
    setIsTransactionCreateModalOpen(true);
  };
  return (
    <div className="buttonsBlock">
      <Button className="button gray">Add account</Button>
      <Button className="button orange" onClick={handleSpend}>
        Spend
      </Button>
    </div>
  );
};

export default ButtonsBlock;
