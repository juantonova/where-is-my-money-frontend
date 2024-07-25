import React from "react";
import { Button } from "antd";

import "./ButtonsBlock.css"

const ButtonsBlock = () => {
  return (
    <div className="buttonsBlock">
      <Button className="button gray">Add account</Button>
      <Button className="button orange">Spend</Button>
    </div>
  )
};

export default ButtonsBlock;
